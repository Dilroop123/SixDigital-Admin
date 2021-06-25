/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {View, Text, Image, Dimensions} from 'react-native';
import color from '../../../../style/color';
import normalize from 'react-native-normalize';
import globalStyles from '../../../../style/globalStyles';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const ProjectCard = ({charges, name, status, image}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: color.white,
        marginTop: SCREEN_HEIGHT * 0.001,
        padding: normalize(15),
        marginBottom: SCREEN_HEIGHT * 0.03,
        alignItems: 'center',
        borderRadius: normalize(10),
        ...globalStyles.shadow,
      }}>
      <Image
        style={{height: SCREEN_HEIGHT * 0.1, width: SCREEN_HEIGHT * 0.1}}
        source={{uri: image}}
      />
      <View
        style={{
          marginHorizontal: SCREEN_WIDTH * 0.05,
        }}
      />
      <View style={{flex: 1, marginVertical: SCREEN_HEIGHT * 0.02}}>
        <Text
          style={{
            color: color.primary,
            fontSize: SCREEN_HEIGHT * 0.02,
          }}>
          {name}
        </Text>
        <Text
          style={{
            color: color.primary,
            fontSize: SCREEN_HEIGHT * 0.017,
            flex: 1,
            marginVertical: SCREEN_HEIGHT * 0.008,
          }}>
          Status : <Text style={{color: color.successText}}>{status}</Text>
        </Text>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text
          style={{
            color: color.primary,
            fontWeight: 'bold',
            fontSize: SCREEN_HEIGHT * 0.02,
          }}>
          {' '}
          &#x24; {charges}
        </Text>
      </View>
    </View>
  );
};

export default ProjectCard;
