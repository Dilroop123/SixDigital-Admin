/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SCREEN_WIDTH, SCREEN_HEIGHT} from '../../../style/fontSize';
import color from '../../../style/color';

const ICON_SIZE = SCREEN_HEIGHT * 0.03;

const Button = ({onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          backgroundColor: color.primary,
          padding: SCREEN_HEIGHT * 0.01,
          borderRadius: SCREEN_HEIGHT * 0.01,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Ionicons
          name="ios-cloud-upload-outline"
          color={color.white}
          style={{marginRight: SCREEN_WIDTH * 0.03}}
          size={ICON_SIZE}
        />
        <Text style={{color: 'white', textAlign: 'center'}}>Browse Files</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Button;
