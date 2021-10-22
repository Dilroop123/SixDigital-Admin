/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {StyleSheet, View} from 'react-native';
import InvoiceContext from '../../../context/InvoiceContext';
import color from '../../../style/color';
import {SCREEN_WIDTH} from '../../../style/fontSize';
import RequestForm from './components/RequestForm';

// import * as ServiceAction from '../../store/actions/ServiceAction';

const CreateInvoice = ({navigation, route}) => {
  const userId = React.useContext(InvoiceContext);

  return (
    <View style={styles.container}>
      <View style={{flex: 1, margin: SCREEN_WIDTH * 0.05}}>
        <RequestForm userId={userId} />
      </View>
    </View>
  );
};

export default CreateInvoice;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: color.white,
  },
});
