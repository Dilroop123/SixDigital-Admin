/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import color from '../../style/color';

import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../style/fontSize';
import RequestForm from './components/RequestForm';

const CreateService = ({navigation, route}) => {
  const naviagteProcess = () => {
    console.log('here');
  };
  return (
    <View style={styles.container}>
      <View style={{flex: 1, margin: SCREEN_WIDTH * 0.05}}>
        <RequestForm onpress={() => navigation.pop()} />
      </View>
    </View>
  );
};

export default CreateService;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: color.white,
  },
});
