/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {
  Dimensions,
  TouchableWithoutFeedback,
  Pressable,
  FlatList,
  StyleSheet,
  Image,
  Button,
  Text,
  View,
  ScrollView,
} from 'react-native';
import {normalize} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DocumentPicker from 'react-native-document-picker';
import {useDispatch, useSelector} from 'react-redux';
import globalStyles from '../../../style/globalStyles';
import TextField from '../../../components/TextField';
import * as ProfileAction from '../../../store/actions/ProfileAction';
import color from '../../../style/color';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../style/fontSize';
import ProjectCard from './ProjectCard';
import {Dropdown} from './Dropdown';

const RequestForm = ({serviceData}) => {
  const options = serviceData?.map(service => ({
    key: service?._id,
    text: service?.name,
  }));

  console.log(options);
  const [serviceId, setServiceId] = React.useState('');
  const [imageResource, setImageResource] = React.useState('');
  const [projectName, setProjectName] = React.useState('');
  const [charges, setCharges] = React.useState('');

  const dispatch = useDispatch();
  const uploadImage = async () => {
    const res = await DocumentPicker.pick({
      type: [DocumentPicker.types.images],
    });
    setImageResource(res);
  };
  const onPressHandler = () => {
    dispatch(
      ProfileAction.createProject(
        serviceId,
        projectName,
        charges,
        imageResource,
        '60cba181b565373c8128e8e8',
        '60ca5f5dc20133792c665bd4',
      ),
    );
  };

  return (
    <View style={styles.container}>
      <ProjectCard />
      <Text style={styles.pageTitle}>Create a Project</Text>

      <View style={styles.requestServiceContainer}>
        <View style={{marginVertical: SCREEN_HEIGHT * 0.015}}>
          <Dropdown options={options} onChange={setServiceId} label="Service" />
          <TextField
            value={projectName}
            onChangeText={setProjectName}
            label="Project Name"
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            alignItems: 'center',
            marginVertical: SCREEN_HEIGHT * 0.015,
          }}>
          <TextField
            value={charges}
            style={styles.col6input}
            onChangeText={setCharges}
            label="Changes"
          />

          <Pressable onPress={() => uploadImage()}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: color.primary,
                padding: SCREEN_WIDTH * 0.02,
              }}>
              <Ionicons
                name="ios-cloud-upload-outline"
                color={color.white}
                style={{marginRight: SCREEN_WIDTH * 0.03}}
                size={SCREEN_HEIGHT * 0.03}
              />
              <Text style={{color: color.white}}>Upload Image</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.inputfieldContainer}>
          <Button
            title="Submit"
            color={color.primary}
            onPress={onPressHandler}
          />
        </View>
      </View>
    </View>
  );
};

export default RequestForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: SCREEN_WIDTH * 0.05,
  },
  pageTitle: {
    fontWeight: 'bold',
    color: color.primary,
    marginVertical: SCREEN_HEIGHT * 0.015,
    fontSize: 20,
  },
  requestServiceContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: color.lightBlue,
    borderRadius: normalize(8),
    marginVertical: SCREEN_HEIGHT * 0.02,
    padding: SCREEN_WIDTH * 0.1,
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
