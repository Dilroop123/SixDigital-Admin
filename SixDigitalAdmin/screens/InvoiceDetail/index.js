/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {StyleSheet, Text, View, FlatList} from 'react-native';

import {SCREEN_HEIGHT} from '../../style/fontSize';
import {useDispatch} from 'react-redux';
import normalize from 'react-native-normalize';
import * as FileAction from '../../store/actions/FileAction';
import Footer from './Footer';
import color from '../../style/color';
import HeaderText from '../../components/HeaderText';
import globalStyles from '../../style/globalStyles';

const InvoiceDetail = ({navigation, route}) => {
  const {invoice} = route.params;

  const dispatch = useDispatch();

  const onBackPress = () => {
    navigation.pop();
  };

  const onChangeStatus = status => {
    dispatch(FileAction.updateInvoiceStatus(invoice?._id, status));
    navigation.pop();
  };

  return (
    <View style={styles.container}>
      <View style={{marginBottom: SCREEN_HEIGHT * 0.01}}>
        <HeaderText text="Details" />
      </View>

      <FlatList
        data={invoice?.services}
        renderItem={({item}) => (
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: color.white,
              marginTop: SCREEN_HEIGHT * 0.001,
              padding: SCREEN_HEIGHT * 0.02,
              marginBottom: SCREEN_HEIGHT * 0.01,
              alignItems: 'center',
              justifyContent: 'space-between',
              borderRadius: normalize(10),
              ...globalStyles.shadow,
            }}>
            <Text>{item?.name}</Text>
            <View style={{flexDirection: 'row'}}>
              <Text>$ {item?.price}</Text>
            </View>
          </View>
        )}
        keyExtractor={item => item._id}
        ListHeaderComponent={
          <View style={{marginBottom: SCREEN_HEIGHT * 0.02}}>
            <Text style={{color: color.grey}}>
              {'No. #' + invoice?._id.substring(0, 5)}
            </Text>
            <Text style={{color: color.primary, fontWeight: 'bold'}}>
              {invoice?.user_id?.first_name}
            </Text>
            <Text style={{color: color.grey}}>{invoice?.user_id?.email}</Text>
          </View>
        }
        ListFooterComponent={
          <Footer
            invoice={invoice}
            onBackPress={onBackPress}
            onChangeStatus={onChangeStatus}
          />
        }
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default InvoiceDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SCREEN_HEIGHT * 0.03,
    backgroundColor: color.white,
  },
});
