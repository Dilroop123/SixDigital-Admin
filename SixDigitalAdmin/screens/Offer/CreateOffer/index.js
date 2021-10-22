/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {StyleSheet, View} from 'react-native';
import color from '../../../style/color';
import {SCREEN_WIDTH} from '../../../style/fontSize';
import RequestForm from './components/RequestForm';
import OfferContext from '../../../context/OfferContext';
// import * as ServiceAction from '../../store/actions/ServiceAction';

const CreateOffer = ({navigation, route}) => {
  const userId = React.useContext(OfferContext);

  return (
    <View style={styles.container}>
      <View style={{flex: 1, margin: SCREEN_WIDTH * 0.05}}>
        <RequestForm userId={userId} />
      </View>
    </View>
  );
};

export default CreateOffer;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: color.white,
  },
});
