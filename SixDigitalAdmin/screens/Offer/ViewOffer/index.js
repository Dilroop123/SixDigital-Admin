/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import color from '../../../style/color';
import {useDispatch, useSelector} from 'react-redux';
import AppHeader from '../../../components/AppHeader';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../style/fontSize';
import RequestForm from './components/Offers';
import Offers from './components/Offers';
import OfferContext from '../../../context/OfferContext';
import * as OffersAction from '../../../store/actions/OfferAction';

const ViewOffer = ({navigation, route}) => {
  const dispatch = useDispatch();
  const userId = React.useContext(OfferContext);
  const OffersData = useSelector(state => state.offer.OfferData);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(OffersAction.getOfferByUser(userId));
    });
  }, [dispatch, navigation, userId]);

  return (
    <View style={styles.container}>
      <View style={{flex: 1, margin: SCREEN_WIDTH * 0.05}}>
        <Offers data={OffersData?.data} />
      </View>
    </View>
  );
};

export default ViewOffer;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: color.white,
  },
});
