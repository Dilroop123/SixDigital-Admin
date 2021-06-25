/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text} from 'react-native';

import color from '../style/color';
import {SCREEN_HEIGHT} from '../style/fontSize';

const HeaderText = ({text}) => {
  return (
    <Text
      style={{
        fontWeight: 'bold',
        color: color.primary,
        fontSize: SCREEN_HEIGHT * 0.02,
      }}>
      {text}
    </Text>
  );
};

export default HeaderText;
