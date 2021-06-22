import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import color from '../../style/color';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../style/fontSize';
import DrawerHeader from '../../components/DrawerHeader';
import Profile from './components/Profile';

const ClientProfile = ({navigation, route}) => {
  const {client} = route.params;
  return (
    <View style={styles.container}>
      <DrawerHeader />
      <Profile
        client={client}
        onPress={(screen, userId) => navigation.navigate(screen, {userId})}
      />
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
