/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {Pressable, Image, Button, Text, View} from 'react-native';
import {normalize} from 'react-native-elements';
import DocumentPicker from 'react-native-document-picker';
import globalStyles from '../../../style/globalStyles';

import color from '../../../style/color';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../style/fontSize';

const ProjectCard = ({projectName, charges}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: color.white,
        margin: SCREEN_HEIGHT * 0.005,
        padding: SCREEN_HEIGHT * 0.01,
        alignItems: 'center',
        borderRadius: normalize(10),
        ...globalStyles.shadow,
      }}>
      <View>
        <Image
          style={{
            height: SCREEN_HEIGHT * 0.12,
            width: SCREEN_HEIGHT * 0.15,
          }}
          source={require('../../../assets/myproject.png')}
        />
      </View>
      <View
        style={{
          backgroundColor: color.lightGrey,
          marginHorizontal: SCREEN_WIDTH * 0.05,
        }}
      />
      <View style={{marginVertical: SCREEN_HEIGHT * 0.02, flex: 1.9}}>
        <Text
          style={{
            color: color.primary,
            fontSize: 16,
            fontWeight: 'bold',
            textTransform: 'capitalize',
          }}>
          {projectName}
        </Text>
        <Text
          style={{
            color: color.grey,
            fontSize: 12,
          }}>
          Description will be taken from timeline..
        </Text>

        <Text style={{color: color.grey, fontSize: 14}}>
          from{' '}
          <Text style={{color: color.purple, fontWeight: 'bold'}}>
            &#x24; {charges}
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default ProjectCard;
