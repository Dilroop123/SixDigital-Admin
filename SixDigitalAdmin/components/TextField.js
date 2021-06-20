/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Dimensions, TextInput, Text, View} from 'react-native';
import color from '../style/color';

const SCREEN_HEIGHT = Dimensions.get('window').height;

const TextField = ({
  value,
  onChangeText,
  label,
  flex,
  style,
  secureTextEntry,
}) => {
  return (
    <View style={{flex: flex, ...style}}>
      <Text style={{color: 'gray'}}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        style={{
          height: SCREEN_HEIGHT * 0.06,
          borderRadius: SCREEN_HEIGHT * 0.03,
          backgroundColor: color.white,
          fontSize: SCREEN_HEIGHT * 0.02,
          paddingLeft: SCREEN_HEIGHT * 0.02,
          marginTop: SCREEN_HEIGHT * 0.01,
        }}
        underlineColorAndroid="transparent"
      />
    </View>
  );
};

export default TextField;
