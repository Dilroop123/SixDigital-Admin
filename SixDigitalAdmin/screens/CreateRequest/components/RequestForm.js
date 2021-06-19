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

import globalStyles from '../../../style/globalStyles';
import TextField from '../../../components/TextField';
import color from '../../../style/color';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../style/fontSize';

const CreateRequest = ({navigation}) => {
  const [serviceName, setServiceName] = React.useState('');
  const [lastName, setLasttName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');

  const onPressHandler = () => {};

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: color.white,
          margin: SCREEN_HEIGHT * 0.005,
          padding: SCREEN_HEIGHT * 0.01,
          alignItems: 'center',
          borderRadius: normalize(10),
          ...globalStyles.shadow,
        }}>
        <View>
          <Image
            style={{
              height: SCREEN_HEIGHT * 0.12,
              width: SCREEN_HEIGHT * 0.15,
            }}
            source={require('../../../../assets/myproject.png')}
          />
        </View>
        <View
          style={{
            backgroundColor: color.lightGrey,
            marginHorizontal: SCREEN_WIDTH * 0.05,
          }}
        />
        <View style={{marginVertical: SCREEN_HEIGHT * 0.02, flex: 1.9}}>
          <Text
            style={{
              color: color.primary,
              fontSize: 16,
              fontWeight: 'bold',
              textTransform: 'capitalize',
            }}>
            Video Shoot
          </Text>
          <Text
            style={{
              color: color.grey,
              fontSize: 12,
            }}>
            A time-lapse app or a camera is one of the best tools for creating
            videos. ...
          </Text>
          <Pressable>
            <View
              style={{
                backgroundColor: color.successText,
                marginVertical: SCREEN_HEIGHT * 0.01,
                marginHorizontal: SCREEN_WIDTH * 0.08,
                padding: SCREEN_HEIGHT * 0.003,
                width: SCREEN_WIDTH * 0.25,
                borderRadius: normalize(4),
              }}>
              <Text style={{color: color.white, textAlign: 'center'}}>
                Call
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
      <Text style={styles.pageTitle}>Create a Project</Text>
      <ScrollView>
        <View style={styles.requestServiceContainer}>
          <View style={{marginVertical: SCREEN_HEIGHT * 0.015}}>
            <TextField
              value={serviceName}
              onChangeText={setServiceName}
              label="Service Name"
            />
          </View>
          <View>
            <TextField
              value={phone}
              onChangeText={setPhone}
              label="Description"
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              marginVertical: SCREEN_HEIGHT * 0.015,
            }}>
            <TextField
              value={serviceName}
              style={styles.col6input}
              onChangeText={setServiceName}
              label="Changes"
            />
            <TextField
              value={lastName}
              style={styles.col6input}
              onChangeText={setLasttName}
              label="Upload Image"
            />
          </View>
          <View style={styles.inputfieldContainer}>
            <Button
              title="Submit"
              color={color.primary}
              onPress={onPressHandler}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CreateRequest;

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
