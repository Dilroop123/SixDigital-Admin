/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import normalize from 'react-native-normalize';
import {StyleSheet, Text, View} from 'react-native';
import {SCREEN_HEIGHT} from '../style/fontSize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import color from '../style/color';

const SearchBar = ({navigation, style}) => {
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: color.lightGrey,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: normalize(5),
        padding: SCREEN_HEIGHT * 0.01,
        ...style,
      }}>
      <Ionicons
        name="md-search-outline"
        color={color.darkGrey}
        style={{marginHorizontal: normalize(8)}}
        size={normalize(20)}
      />
      <Text style={{color: color.darkGrey}}>What are you looking for ?</Text>
    </View>
  );
};

export default SearchBar;
