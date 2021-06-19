/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Dimensions, Text} from 'react-native';

import color from '../style/color';

const Button = ({navigation}) => {
  return (
    <View style={{backgroundColor: color.primary, padding: 8, borderRadius: 5}}>
      <Text style={{fontWeight: 'bold', color: 'white', textAlign: 'center'}}>
        Submit
      </Text>
    </View>
  );
};

export default Button;
