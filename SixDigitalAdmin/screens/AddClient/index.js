import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import color from '../../style/color';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../style/fontSize';
import ClientList from './components/ClientList';

import DrawerHeader from '../../components/DrawerHeader';

const AddClient = ({navigation}) => {
  return (
    <View style={styles.container}>
      <DrawerHeader />
      <ClientList />
    </View>
  );
};

export default AddClient;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
});
