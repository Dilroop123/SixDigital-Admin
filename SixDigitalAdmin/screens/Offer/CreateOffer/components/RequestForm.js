/* eslint-disable no-extra-boolean-cast */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Button,
  Image,
  KeyboardAvoidingView,
} from 'react-native';

import {normalize} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DocumentPicker from 'react-native-document-picker';
import {useDispatch, useSelector} from 'react-redux';
import globalStyles from '../../../../style/globalStyles';
import TextField from '../../../../components/TextField';
import * as OfferAction from '../../../../store/actions/OfferAction';
import color from '../../../../style/color';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../../style/fontSize';

const RquestForm = ({userId}) => {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [actualCost, setActualCost] = React.useState('');
  const [realCost, setRealCost] = React.useState('');
  const [coverImage, setCoverImage] = React.useState('');

  const dispatch = useDispatch();

  const uploadCoverImage = async () => {
    const res = await DocumentPicker.pick({
      type: [DocumentPicker.types.images],
    });
    setCoverImage(res);
  };

  const onPressHandler = () => {
    dispatch(
      OfferAction.createNewOffer(
        title,
        description,
        actualCost,
        coverImage,
        realCost,
        userId,
        '60cb713a0cf5463694069353',
      ),
    );
  };

  return (
    <KeyboardAvoidingView
      behavior="position"
      // enabled={enableShift}
      style={styles.container}>
      <View>
        <View>
          {!!coverImage ? (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Image
                style={{
                  height: SCREEN_HEIGHT * 0.12,
                  width: SCREEN_HEIGHT * 0.15,
                }}
                source={{uri: coverImage?.uri}}
              />
              <Pressable onPress={() => uploadCoverImage()}>
                <Text style={{color: 'gray'}}>Want to Replace Image ?</Text>
              </Pressable>
            </View>
          ) : (
            <Pressable onPress={() => uploadCoverImage()}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: normalize(7),
                  backgroundColor: color.lightGrey,
                  padding: SCREEN_WIDTH * 0.05,
                  height: SCREEN_HEIGHT * 0.1,
                }}>
                <Ionicons
                  name="ios-cloud-upload-outline"
                  color={color.purple}
                  style={{marginRight: SCREEN_WIDTH * 0.03}}
                  size={SCREEN_HEIGHT * 0.03}
                />
                <Text
                  style={{
                    color: color.purple,
                    fontWeight: 'bold',
                    fontSize: 18,
                  }}>
                  Upload Image
                </Text>
              </View>
            </Pressable>
          )}
        </View>
        <Text style={styles.pageTitle}>Create offers/Ad</Text>

        <View style={styles.requestServiceContainer}>
          <View style={{marginVertical: SCREEN_HEIGHT * 0.015}}>
            <TextField value={title} onChangeText={setTitle} label="Title" />
          </View>

          <View style={{marginVertical: SCREEN_HEIGHT * 0.015}}>
            <TextField
              value={description}
              onChangeText={setDescription}
              multiline={true}
              label="Description"
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
            }}>
            <TextField
              value={actualCost}
              style={styles.col6input}
              onChangeText={setActualCost}
              label="Actual Cost"
            />
            <TextField
              value={realCost}
              style={styles.col6input}
              onChangeText={setRealCost}
              label="Offer Cost"
            />
          </View>

          <View style={{marginTop: SCREEN_HEIGHT * 0.02}}>
            <Button
              title="Submit"
              color={color.primary}
              onPress={onPressHandler}
            />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default RquestForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: SCREEN_WIDTH * 0.05,
    marginVertical: SCREEN_HEIGHT * 0.02,
  },
  pageTitle: {
    fontWeight: 'bold',
    color: color.primary,
    marginTop: SCREEN_HEIGHT * 0.02,
    fontSize: 20,
  },
  requestServiceContainer: {
    backgroundColor: color.lightBlue,
    borderRadius: normalize(8),
    padding: SCREEN_WIDTH * 0.05,
  },

  col6input: {
    width: SCREEN_WIDTH * 0.36,
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
