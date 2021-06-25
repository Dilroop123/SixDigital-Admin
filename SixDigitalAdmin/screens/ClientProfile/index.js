import React from 'react';

import {StyleSheet, View} from 'react-native';
import color from '../../style/color';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../style/fontSize';
import Profile from './components/Profile';
import AppHeader from '../../components/AppHeader';

const ClientProfile = ({navigation, route}) => {
  const {client} = route.params;
  return (
    <View style={styles.container}>
      <View style={{marginVertical: SCREEN_HEIGHT * 0.03}}>
        <AppHeader onPress={() => navigation.pop()} />
      </View>

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
    paddingHorizontal: SCREEN_WIDTH * 0.05,
    backgroundColor: color.white,
  },
});
