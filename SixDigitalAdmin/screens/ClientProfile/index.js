import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import color from '../../style/color';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../style/fontSize';
import DrawerHeader from '../../components/DrawerHeader';
import Profile from './components/Profile';

const ClientProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <DrawerHeader />
      <Profile onPress={() => navigation.navigate('CreateProject')} />
    </View>
  );
};

export default ClientProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
});
