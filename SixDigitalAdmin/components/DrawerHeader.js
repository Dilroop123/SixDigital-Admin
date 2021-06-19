/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Dimensions, Text, Pressable, StyleSheet} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../style/fontSize';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import color from '../style/color';

const DrawerHeader = ({navigation}) => {
  return (
    <View style={styles.headerContainer}>
      <View>
        <Pressable>
          <MaterialIcons name="menu" style={styles.backIcon} />
        </Pressable>
      </View>
      <View>
        <Text style={styles.headerText}>6 DIGITAL</Text>
      </View>
      <View>
        <Pressable>
          <MaterialIcons name="notifications" style={styles.notificationIcon} />
        </Pressable>
      </View>
    </View>
  );
};

export default DrawerHeader;
const styles = StyleSheet.create({
  headerContainer: {
    marginTop: SCREEN_HEIGHT * 0.04,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between'
  },
  headerText: {
    fontWeight: 'bold',
    color: color.primary,
    textAlign: 'center',
    fontSize: SCREEN_HEIGHT * 0.035,
  },
  backIcon: {
    fontSize: 26,
    fontWeight:'bold',
    color: color.primary,
    marginHorizontal: SCREEN_WIDTH * 0.03,
    width: SCREEN_WIDTH * 0.3,
  },
  notificationIcon:{
    fontSize: 30,
    color: color.primary,
    marginHorizontal: SCREEN_WIDTH * 0.03,
    width: SCREEN_WIDTH * 0.5,
    marginLeft:SCREEN_WIDTH * 0.2
  }
});
