/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {
  Dimensions,
  TouchableWithoutFeedback,
  ScrollView,
  ImageBackground,
  StyleSheet,
  Image,
  Button,
  Text,
  View,
} from 'react-native';
import {normalize} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import TextField from '../../../components/TextField';

import color from '../../../style/color';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../style/fontSize';

const ForgotPassword = ({navigation}) => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLasttName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Add Client</Text>
      <ScrollView>
        <View style={styles.addClientContainer}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
              marginVertical: SCREEN_HEIGHT * 0.02,
            }}>
            <Image
              source={require('../../../assets/guest.png')}
              style={{height: 100, width: 100}}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              marginVertical: SCREEN_HEIGHT * 0.015,
            }}>
            <TextField
              value={firstName}
              style={styles.col6input}
              onChangeText={setFirstName}
              label="First Name"
            />
            <TextField
              value={lastName}
              style={styles.col6input}
              onChangeText={setLasttName}
              label="Last Name"
            />
          </View>
          <View style={{marginVertical: SCREEN_HEIGHT * 0.015}}>
            <TextField
              value={email}
              onChangeText={setEmail}
              label="Email"
              keyboardType="email-address"
            />
          </View>
          <View>
            <TextField
              value={phone}
              onChangeText={setPhone}
              label="Phone No"
              keyboardType="numaric"
            />
          </View>
          <View style={styles.inputfieldContainer}>
            <Button
              title="Add Client"
              color={color.primary}
              onPress={() => console.log('sds')}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SCREEN_WIDTH * 0.05,
  },
  pageTitle: {
    fontWeight: 'bold',
    color: color.primary,
    marginVertical: SCREEN_HEIGHT * 0.01,
    fontSize: 20,
  },
  addClientContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: color.lightBlue,
    borderRadius: normalize(8),
    marginVertical: SCREEN_HEIGHT * 0.05,
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
