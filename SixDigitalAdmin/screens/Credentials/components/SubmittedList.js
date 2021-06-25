/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import color from '../../../style/color';
import globalStyles from '../../../style/globalStyles';
import normalize from 'react-native-normalize';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const Label = ({text, value}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={{flex: 1}}>
        <Text style={{color: color.primary, fontSize: normalize(14)}}>
          {text}
        </Text>
      </View>
      <View style={{flex: 2}}>
        <Text style={{color: 'gray', fontSize: normalize(14)}}>
          {':  ' + value}
        </Text>
      </View>
    </View>
  );
};

const SubmittedList = ({savedCrdentials, HeaderComponent}) => {
  const renderItems = ({item: icon}) => (
    <TouchableWithoutFeedback>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          backgroundColor: 'white',
          marginTop: SCREEN_HEIGHT * 0.01,
          padding: normalize(15),
          flex: 1,
          alignItems: 'center',
          borderRadius: normalize(10),
          ...globalStyles.shadow,
        }}>
        <Image
          style={{height: SCREEN_HEIGHT * 0.05, width: SCREEN_HEIGHT * 0.05}}
          source={{uri: icon?.credential_type_id?.image?.publicUrl}}
        />
        <View
          style={{
            height: '100%',
            width: 1,
            backgroundColor: color.lightGrey,
            marginHorizontal: SCREEN_WIDTH * 0.05,
          }}
        />
        <View style={{flex: 1}}>
          <Label text="Title" value={icon?.title} />
          {!!icon?.email && <Label text="Email id" value={icon?.email} />}
          {!!icon?.password && <Label text="Password" value={icon?.password} />}
          {!!icon?.card_holder_name && (
            <Label text="Card Holder" value={icon?.card_holder_name} />
          )}
          {!!icon?.card_name && (
            <Label text="Card Number" value={icon?.card_name} />
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={savedCrdentials}
        keyExtractor={item => item._id}
        renderItem={renderItems}
        contentContainerStyle={{marginTop: SCREEN_HEIGHT * 0.02}}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={HeaderComponent}
        ListFooterComponent={<View style={{height: SCREEN_HEIGHT * 0.3}} />}
      />
    </View>
  );
};

export default SubmittedList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageaspectratio: {
    width: undefined,
    height: undefined,
  },
});
