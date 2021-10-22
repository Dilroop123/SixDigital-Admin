/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import color from '../../../style/color';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const ModalHeader = ({title, onpress}) => {
  return (
    <View style={styles.container}>
      <Text style={{fontWeight: 'bold', color: color.primary}}>{title}</Text>
      <Ionicons
        name="close-circle-outline"
        color={color.primary}
        onPress={onpress}
        size={SCREEN_HEIGHT * 0.04}
      />
    </View>
  );
};

export default ModalHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: SCREEN_WIDTH * 0.03,
    marginTop: SCREEN_HEIGHT * 0.01,
  },
});
