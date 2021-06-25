/* eslint-disable react-native/no-inline-styles */

import React from 'react';

import {
  Dimensions,
  Pressable,
  Platform,
  Image,
  ActivityIndicator,
  Text,
  View,
  PermissionsAndroid,
} from 'react-native';
import color from '../../../style/color';
import globalStyles from '../../../style/globalStyles';

import RNFetchBlob from 'rn-fetch-blob';
import * as FileActions from '../../../store/actions/FileAction';
import {useDispatch} from 'react-redux';

const SCREEN_HEIGHT = Dimensions.get('window').height;

const FileItem = ({document}) => {
  const [isShowLoader, setShowLoader] = React.useState(false);
  const [documentData, setDocumentData] = React.useState();
  const dispatch = useDispatch();

  React.useEffect(() => {
    setDocumentData(document);
  }, [document]);

  const showDocument = async file => {
    setShowLoader(true);
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        const {dirs} = RNFetchBlob.fs;
        const dirToSave =
          Platform.OS === 'ios' ? dirs.DocumentDir : dirs.DownloadDir;
        const configfb = {
          fileCache: true,
          addAndroidDownloads: {
            path: dirToSave + '/' + file.image.name,
            description: 'downloading file...',
            notification: true,
            // useDownloadManager works with Android only
            useDownloadManager: true,
          },
        };
        const configOptions = Platform.select({
          ios: {
            fileCache: configfb.fileCache,
            title: configfb.title,
            path: configfb.path,
            appendExt: 'pdf',
          },
          android: configfb,
        });

        RNFetchBlob.config(configOptions)
          .fetch('GET', file.image.publicUrl, {})
          .then(res => {
            if (Platform.OS === 'ios') {
              setShowLoader(false);
              RNFetchBlob.fs.writeFile(configfb.path, res.data, 'base64');
              RNFetchBlob.ios.previewDocument(configfb.path);
            }
            if (Platform.OS === 'android') {
              //TOAST ADDED TO NOTIFICATION PANEL
              setShowLoader(false);
              RNFetchBlob.android.actionViewIntent(
                res.path(),
                file?.image?.mimeType || 'application/pdf',
              );
            }
          })
          .catch(e => {});
      } else {
        // TOAST PERMISSION DENIED
      }
    } else {
      const {dirs} = RNFetchBlob.fs;
      const dirToSave =
        Platform.OS === 'ios' ? dirs.DocumentDir : dirs.DownloadDir;
      const configfb = {
        fileCache: true,
        useDownloadManager: true,
        notification: true,
        mediaScannable: true,
        title: file.image.name,
        path: `${dirToSave}/${file.image.name}`,
      };
      const configOptions = Platform.select({
        ios: {
          fileCache: configfb.fileCache,
          title: configfb.title,
          path: configfb.path,
          appendExt: 'pdf',
        },
        android: configfb,
      });

      RNFetchBlob.config(configOptions)
        .fetch('GET', file.image.publicUrl, {})
        .then(res => {
          if (Platform.OS === 'ios') {
            RNFetchBlob.fs.writeFile(configfb.path, res.data, 'base64');
            RNFetchBlob.ios.previewDocument(configfb.path);
          }
          if (Platform.OS === 'android') {
            //showSnackbar('File downloaded');

            RNFetchBlob.android.actionViewIntent(
              res.path(),
              file?.image?.mimeType || 'application/pdf',
            );
            console.log('File downloaded');
          }
          console.log('The file saved to ', res.data);
        })
        .catch(e => {
          console.log('The file saved to ERROR', e.message);
        });
    }
  };

  const markPaidHandler = invoiceId => {
    dispatch(FileActions.updateInvoiceStatus(invoiceId));

    setDocumentData({
      ...documentData,
      status: 'Paid',
    });
  };

  return (
    <Pressable>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: color.white,
          padding: 15,
          marginTop: SCREEN_HEIGHT * 0.02,
          borderRadius: 5,
          justifyContent: 'space-between',
          ...globalStyles.shadow,
        }}>
        <Image
          style={{
            height: SCREEN_HEIGHT * 0.04,
            width: SCREEN_HEIGHT * 0.04,
          }}
          source={require('../../../assets/fileFormats/pdf.png')}
        />
        <View>
          {isShowLoader && (
            <ActivityIndicator
              size="large"
              color={color.primary}
              animating={isShowLoader}
            />
          )}

          <Text style={{color: 'gray'}}>{documentData?.image?.name}</Text>
          <View style={{marginTop: 5}}>
            <Text style={{color: color.primary}}>{documentData?.name}</Text>
          </View>
          <Pressable onPress={() => showDocument(documentData)}>
            <View style={{marginTop: 5}}>
              <Text
                style={{
                  color: '#000',
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                View
              </Text>
            </View>
          </Pressable>
        </View>
        <View>
          <View>
            <Text
              style={{
                color:
                  documentData?.status === 'Not Paid'
                    ? 'red'
                    : color.successText,
              }}>
              {documentData?.status}
            </Text>
          </View>
          {documentData?.status === 'Not Paid' && (
            <Pressable onPress={() => markPaidHandler(documentData?._id)}>
              <Text style={{color: 'gray', marginTop: SCREEN_HEIGHT * 0.01}}>
                Mark as Paid
              </Text>
            </Pressable>
          )}
        </View>
      </View>
    </Pressable>
  );
};

export default FileItem;
