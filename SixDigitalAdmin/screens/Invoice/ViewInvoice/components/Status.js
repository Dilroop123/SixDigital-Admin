/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {StyleSheet, View, FlatList, Text} from 'react-native';
import color from '../../../../style/color';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../../style/fontSize';
import {getColor} from './getColor';

// import * as ServiceAction from '../../store/actions/ServiceAction';

const Status = ({status}) => {
  const statusColor = getColor(status);

  const addOpacity = (rgbString, opacity) => {
    return rgbString.split(',1)')[0] + ',' + opacity + ')';
  };

  return (
    <View
      style={{
        backgroundColor: addOpacity(statusColor, 0.1),
        alignItems: 'center',
        justifyContent: 'center',
        padding: SCREEN_HEIGHT * 0.005,
        borderRadius: SCREEN_HEIGHT * 0.02,
        marginHorizontal: SCREEN_HEIGHT * 0.01,
      }}>
      <Text style={{color: statusColor}}>{status}</Text>
    </View>
  );
};

export default Status;
