/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {
  Dimensions,
  StyleSheet,
  Image,
  Text,
  View,
  FlatList,
} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import { useDispatch, useSelector } from 'react-redux';
import * as FileAction from '../../../store/actions/FileAction';
import Toast from '../../../components/Toast';
import color from '../../../style/color';
import Button from './Button';
import FileItem from '../component/FileItem';
import FileContext from '../../../context/FileContext';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const Upload = ({ navigation }) => {
  const [isShowToast, setIsShowToast] = React.useState(false);
  const fileDAta = useSelector(state => state.file.FileData);
  const dispatch = useDispatch();
  const userId = React.useContext(FileContext);
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      //  setLoader(true);  check in voozoo

      dispatch(FileAction.getFiles(userId));
    });
  }, [dispatch, navigation, userId]);

  const userUploaded = fileDAta?.data?.filter(
    file => file?.send_type === 'adminUploaded',
  );

  const uploadDocument = async () => {
    // Pick a single file

    setIsShowToast(false);
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      setIsShowToast(true);

      await dispatch(
        FileAction.sendFile(
          userId,
          res,
          'This is the test',
          'adminUploaded',
        ),
      );
      await dispatch(FileAction.getFiles(userId));
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  };

  const _renderItem = ({ item: document }) => <FileItem document={document} />;

  return (
    <View style={styles.container}>
      {isShowToast && <Toast message="upload success" />}

      <Text style={{ color: 'gray' }}>
        Upload your documents you want to share with us
      </Text>

      <View
        style={{
          borderRadius: 1,
          marginTop: SCREEN_HEIGHT * 0.02,
          borderStyle: 'dashed',
          borderWidth: 1,
          borderColor: color.primary,
        }}>
        <View
          style={{
            marginHorizontal: SCREEN_HEIGHT * 0.08,
            padding: SCREEN_HEIGHT * 0.02,
          }}>
          <Button onPress={() => uploadDocument()} />
        </View>
      </View>
      <FlatList
        data={userUploaded}
        renderItem={_renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item._id}
        contentContainerStyle={{ marginTop: SCREEN_HEIGHT * 0.05 }}
        ListFooterComponent={<View style={{ height: SCREEN_HEIGHT * 0.3 }} />}
      />
    </View>
  );
};

export default Upload;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: SCREEN_WIDTH * 0.05,
  },
});
