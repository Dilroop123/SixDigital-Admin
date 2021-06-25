/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {Pressable, StyleSheet, Button, Text, View, Image} from 'react-native';
import {normalize} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DocumentPicker from 'react-native-document-picker';
import {useDispatch} from 'react-redux';
import TextField from '../../../components/TextField';
import * as ServiceActions from '../../../store/actions/ServiceAction';
import color from '../../../style/color';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../style/fontSize';

const RequestForm = ({onpress}) => {
  const [imageResource, setImageResource] = React.useState('');
  const [coverImage, setCoverImage] = React.useState('');
  const [serviceName, setServiceName] = React.useState('');
  const [description, setDescription] = React.useState('');

  const dispatch = useDispatch();

  const uploadImage = async () => {
    const res = await DocumentPicker.pick({
      type: [DocumentPicker.types.images],
    });
    setImageResource(res);
  };

  const uploadCoverImage = async () => {
    const res = await DocumentPicker.pick({
      type: [DocumentPicker.types.images],
    });
    setCoverImage(res);
  };

  const onPressHandler = () => {
    dispatch(
      ServiceActions.createService(
        imageResource,
        coverImage,
        serviceName,
        description,
      ),
    );
    onpress();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Create Service</Text>

      <View style={styles.requestServiceContainer}>
        <View style={{marginVertical: SCREEN_HEIGHT * 0.015}}>
          <TextField
            value={serviceName}
            onChangeText={setServiceName}
            label="Service Name"
          />
        </View>
        <View style={{marginVertical: SCREEN_HEIGHT * 0.015}}>
          <TextField
            value={description}
            onChangeText={setDescription}
            label="Description"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: SCREEN_HEIGHT * 0.015,
          }}>
          <Pressable onPress={() => uploadImage()}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderRadius: SCREEN_HEIGHT * 0.02,
                marginTop: SCREEN_HEIGHT * 0.03,
                marginLeft: SCREEN_WIDTH * 0.05,
                backgroundColor: color.primary,
                padding: SCREEN_WIDTH * 0.02,
              }}>
              <Ionicons
                name="ios-cloud-upload-outline"
                color={color.white}
                style={{marginRight: SCREEN_WIDTH * 0.03}}
                size={SCREEN_HEIGHT * 0.03}
              />
              <Text style={{color: color.white}}>Upload Icon</Text>
            </View>
          </Pressable>

          <Pressable onPress={() => uploadCoverImage()}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderRadius: SCREEN_HEIGHT * 0.02,
                marginTop: SCREEN_HEIGHT * 0.03,
                marginLeft: SCREEN_WIDTH * 0.05,
                backgroundColor: color.primary,
                padding: SCREEN_WIDTH * 0.02,
              }}>
              <Ionicons
                name="ios-cloud-upload-outline"
                color={color.white}
                style={{marginRight: SCREEN_WIDTH * 0.03}}
                size={SCREEN_HEIGHT * 0.03}
              />
              <Text style={{color: color.white}}>Upload Cover</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.inputfieldContainer}>
          <Button
            title="Submit"
            color={color.primary}
            onPress={() => onPressHandler()}
          />
        </View>
      </View>
      <View style={{flexDirection: 'row', marginTop: SCREEN_HEIGHT * 0.05}}>
        <Image
          style={{
            height: SCREEN_HEIGHT * 0.12,
            width: SCREEN_HEIGHT * 0.15,
          }}
          source={{uri: imageResource?.uri}}
        />
        <Image
          style={{
            height: SCREEN_HEIGHT * 0.12,
            width: SCREEN_HEIGHT * 0.15,
            marginLeft: SCREEN_WIDTH * 0.05,
          }}
          source={{uri: coverImage?.uri}}
        />
      </View>
    </View>
  );
};

export default RequestForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pageTitle: {
    fontWeight: 'bold',
    color: color.primary,
    marginVertical: SCREEN_HEIGHT * 0.015,
    fontSize: SCREEN_HEIGHT * 0.02,
  },
  requestServiceContainer: {
    backgroundColor: color.lightBlue,
    borderRadius: normalize(8),
    paddingHorizontal: SCREEN_WIDTH * 0.05,
  },
  inputfieldContainer: {
    marginVertical: SCREEN_HEIGHT * 0.03,
  },
  col6input: {
    width: SCREEN_WIDTH * 0.4,
    padding: SCREEN_WIDTH * 0.01,
  },
  input: {
    height: SCREEN_HEIGHT * 0.05,
    borderWidth: 1,
    borderColor: color.grey,
    backgroundColor: color.white,
    borderRadius: normalize(10),
  },
});
