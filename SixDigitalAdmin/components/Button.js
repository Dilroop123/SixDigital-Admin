/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Pressable, Text} from 'react-native';

import color from '../style/color';

const Button = ({onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <View
        style={{backgroundColor: color.primary, padding: 8, borderRadius: 5}}>
        <Text style={{fontWeight: 'bold', color: 'white', textAlign: 'center'}}>
          Submit
        </Text>
      </View>
    </Pressable>
  );
};

export default Button;
