import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import color from '../../../style/color';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../style/fontSize';
import AppHeader from '../../../components/AppHeader';
import CreateServiceForm from './components/createServiceForm';
import {createSelectorHook} from 'react-redux';

const CreateServices = ({navigation}) => {
  return (
    <View style={styles.container}>
      <AppHeader />
      <CreateServiceForm />
    </View>
  );
};

export default CreateServices;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
});
