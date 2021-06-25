/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';

import {
  Text,
  Pressable,
  StyleSheet,
  SafeAreaView,
  Image,
  View,
  Switch,
  FlatList,
} from 'react-native';
import {useDispatch} from 'react-redux';
import color from '../../../../style/color';
import * as offersAction from '../../../../store/actions/OfferAction';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../../style/fontSize';

const Offers = ({data}) => {
  const [flatListData, setFlatListData] = React.useState();
  const dispatch = useDispatch();
  React.useEffect(() => {
    setFlatListData(data);
  }, [data]);

  const onValueChangeHandler = (id, status) => {
    const updateFlatListData = flatListData.map(offer =>
      offer._id === id ? {...offer, status: !status} : offer,
    );
    setFlatListData(updateFlatListData);
    dispatch(offersAction.updateOfferStatus(id, !status));
  };

  const _renderItem = ({item: offer}) => (
    <View style={styles.offers}>
      <Image
        style={styles.offersImgArea}
        source={{uri: offer?.image?.publicUrl}}
      />
      <Text style={styles.offerTitle}>{offer.title}</Text>
      <View style={{flex: 1}}>
        <Text style={styles.offerText}>{offer?.description}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.offerPriceArea}>
          <Text style={styles.offerPrice}>$ {offer?.real_cost}</Text>
          <View
            style={{
              flexGrow: 1,
              alignItems: 'flex-end',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 12, color: color.grey}}>Before </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: color.grey,
                  textDecorationLine: 'line-through',
                }}>
                {offer?.actual_cost}
              </Text>
            </View>
          </View>
        </View>

        <Switch
          trackColor={{false: color.darkGrey, true: color.darkGrey}}
          thumbColor={offer?.status ? color.successText : 'gray'}
          ios_backgroundColor="#3e3e3e"
          style={{marginLeft: SCREEN_WIDTH * 0.05}}
          onValueChange={() => onValueChangeHandler(offer?._id, offer?.status)}
          value={offer?.status}
        />
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={flatListData}
          renderItem={_renderItem}
          extraData={data}
          keyExtractor={item => item._id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={<View style={{height: SCREEN_HEIGHT * 0.5}} />}
        />
      </View>
    </View>
  );
};

export default Offers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  offers: {
    backgroundColor: color.lightBlue,
    borderRadius: SCREEN_HEIGHT * 0.01,
    padding: SCREEN_WIDTH * 0.02,
    flex: 1,
    marginHorizontal: SCREEN_WIDTH * 0.02,
    marginBottom: SCREEN_HEIGHT * 0.02,
  },
  offersImgArea: {
    backgroundColor: color.white,
    height: SCREEN_HEIGHT * 0.1,
    width: SCREEN_WIDTH * 0.4,
    borderRadius: SCREEN_HEIGHT * 0.01,
    alignItems: 'center',
  },
  offerTitle: {
    color: color.primary,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: SCREEN_HEIGHT * 0.01,
  },
  offerText: {
    textAlign: 'center',
    marginTop: 8,
    color: color.grey,
    lineHeight: SCREEN_HEIGHT * 0.02,
    marginVertical: SCREEN_HEIGHT * 0.015,
  },
  offerPriceArea: {
    backgroundColor: color.white,
    borderRadius: 4,
    flex: 1,
    //  justifyContent: 'center',
    alignItems: 'center',
    padding: SCREEN_HEIGHT * 0.01,
  },
  offerPrice: {
    color: color.primary,
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
  },
});
