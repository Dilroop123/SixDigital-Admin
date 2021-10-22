/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import AppHeader from '../../components/AppHeader';
import color from '../../style/color';

import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../style/fontSize';
import RequestForm from './components/RequestForm';

const CreateService = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <AppHeader onPress={() => navigation.pop()} />
      <View style={{flex: 1}}>
        <RequestForm onpress={() => navigation.pop()} />
      </View>
    </View>
  );
};

export default CreateService;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SCREEN_HEIGHT * 0.02,
    backgroundColor: color.white,
  },
});
