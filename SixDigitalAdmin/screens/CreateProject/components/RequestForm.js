/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {
  Pressable,
  StyleSheet,
  Button,
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {normalize} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DocumentPicker from 'react-native-document-picker';
import {useDispatch} from 'react-redux';
import TextField from '../../../components/TextField';
import * as ProfileAction from '../../../store/actions/ProfileAction';
import color from '../../../style/color';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../style/fontSize';
import ProjectCard from './ProjectCard';
import {Dropdown} from './Dropdown';

const RequestForm = ({serviceData, userId}) => {
  const options = serviceData?.map(service => ({
    key: service?._id,
    text: service?.name,
  }));

  const statusOptions = [
    {
      key: 'Pending',
      text: 'Pending',
    },
    {
      key: 'Active',
      text: 'Active',
    },
    {
      key: 'Completed',
      text: 'Completed',
    },
    {
      key: 'Progress',
      text: 'Progress',
    },
  ];

  const [serviceId, setServiceId] = React.useState('');
  const [status, setStatus] = React.useState('');
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
        userId,
        status,
      ),
    );
  };

  return (
    <KeyboardAvoidingView
      behavior="position"
      // enabled={enableShift}
      style={styles.container}>
      <View>
        <View style={{marginTop: SCREEN_HEIGHT * 0.01}}>
          <ProjectCard
            projectName={projectName}
            charges={charges}
            image={imageResource?.uri}
          />
        </View>

        <Text style={styles.pageTitle}>Create a Project</Text>

        <View style={styles.requestServiceContainer}>
          <View style={{marginVertical: SCREEN_HEIGHT * 0.015}}>
            <Dropdown
              options={options}
              onChange={setServiceId}
              placeholder="Select service.."
              label="Service"
            />
            <Dropdown
              options={statusOptions}
              onChange={setStatus}
              placeholder="Select status.."
              label="Status"
            />
            <TextField
              value={projectName}
              onChangeText={setProjectName}
              label="Project Name"
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
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
    </KeyboardAvoidingView>
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
    fontSize: 20,
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
