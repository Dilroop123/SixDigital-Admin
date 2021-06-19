import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import color from '../../style/color';
import AppHeader from '../../../components/AppHeader';
import RequestForm from './components/RequestForm';

const CreateRequest = ({navigation}) => {
  return (
    <View style={styles.container}>
      <AppHeader />
      <RequestForm />
    </View>
  );
};

export default CreateRequest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
});
