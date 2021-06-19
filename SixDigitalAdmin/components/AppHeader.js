/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Dimensions, Text, Pressable, StyleSheet} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../style/fontSize';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import color from '../style/color';

const AppHeader = ({onPress, style}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', ...style}}>
      {!!onPress && (
        <Pressable onPress={onPress}>
          <MaterialIcons name="arrow-back-ios" style={styles.backIcon} />
        </Pressable>
      )}

      <View style={{flex: 1, marginRight: SCREEN_HEIGHT * 0.05}}>
        <Text
          style={{
            fontWeight: 'bold',
            color: color.primary,
            textAlign: 'center',
            fontSize: SCREEN_HEIGHT * 0.035,
          }}>
          6 DIGITAL
        </Text>
      </View>
    </View>
  );
};

export default AppHeader;
const styles = StyleSheet.create({
  backIcon: {
    fontSize: SCREEN_HEIGHT * 0.028,
    color: color.primary,
  },
});
