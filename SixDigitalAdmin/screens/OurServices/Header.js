/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import color from '../../style/color';
import {SCREEN_HEIGHT} from '../../style/fontSize';

const Header = ({leftLabel, rightLabel, style, onPress}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        ...style,
      }}>
      {!!leftLabel && (
        <Text
          style={{
            color: color.primary,
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          {leftLabel}
        </Text>
      )}
      {!!rightLabel && (
        <TouchableOpacity
          onPress={() => onPress()}
          style={{
            flexGrow: 1,
            alignItems: 'flex-end',
          }}>
          <View
            style={{
              backgroundColor: color.successText,
              padding: SCREEN_HEIGHT * 0.01,
              borderRadius: SCREEN_HEIGHT * 0.01,
            }}>
            <Text style={{color: color.white, fontSize: 14}}>{rightLabel}</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
