import React from 'react';

import {StyleSheet, Text, View} from 'react-native';

import color from '../../style/color';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../style/fontSize';

const ServiceRequest = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.splashTxt}>Service Request</Text>
    </View>
  );
};

export default ServiceRequest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.purple,
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashTxt: {
    color: color.white,
    fontWeight: 'bold',
    fontSize: 40,
  },
});
