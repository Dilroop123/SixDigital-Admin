/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {Image, Text, View} from 'react-native';
import {normalize} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import globalStyles from '../../../style/globalStyles';

import color from '../../../style/color';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../style/fontSize';

const ProfileCard = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: color.white,
        marginTop: SCREEN_HEIGHT * 0.001,
        marginHorizontal: SCREEN_HEIGHT * 0.02,
        padding: SCREEN_HEIGHT * 0.02,
        marginBottom: SCREEN_HEIGHT * 0.05,
        alignItems: 'center',
        borderRadius: normalize(10),
        ...globalStyles.shadow,
      }}>
      <View style={{flex: 0.7}}>
        <Image
          style={{
            height: SCREEN_HEIGHT * 0.1,
            width: SCREEN_HEIGHT * 0.1,
            borderRadius: normalize(50),
          }}
          source={require('../../../assets/guest.png')}
        />
      </View>
      <View
        style={{
          backgroundColor: color.lightGrey,
          marginHorizontal: SCREEN_WIDTH * 0.05,
        }}
      />
      <View style={{flex: 2, marginVertical: SCREEN_HEIGHT * 0.02}}>
        <Text
          style={{
            color: color.primary,
            fontSize: 16,
            fontWeight: 'bold',
            textTransform: 'capitalize',
          }}>
          Jesus Gillobs
        </Text>
        <Text
          style={{
            color: color.grey,
            fontSize: 12,
            flex: 1,
            marginVertical: SCREEN_HEIGHT * 0.008,
          }}>
          Jessusgibbs@hotmail.com
        </Text>
      </View>
      <View
        style={{
          flex: 0.2,
          backgroundColor: color.successText,
          padding: SCREEN_HEIGHT * 0.003,
        }}>
        <FontAwesome
          name="volume-control-phone"
          style={{color: color.white, fontSize: 18}}
        />
      </View>
    </View>
  );
};

export default ProfileCard;