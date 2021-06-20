import React from 'react';

import {StyleSheet, Text, View, ScrollView} from 'react-native';
import color from '../../style/color';
import DrawerHeader from '../../components/DrawerHeader';
import ClientList from './components/ClientList';

const MyClients = ({navigation}) => {
  return (
    <View style={styles.container}>
      <DrawerHeader />
      <ClientList onPress={() => navigation.navigate('ClientProfile')} />
    </View>
  );
};

export default MyClients;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
});
