/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {
  TouchableWithoutFeedback,
  Pressable,
  FlatList,
  StyleSheet,
  Image,
  Text,
  View,
} from 'react-native';
import {normalize} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import globalStyles from '../../../style/globalStyles';
import SearchBar from '../../../components/SearchBar';
import color from '../../../style/color';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../style/fontSize';

const DATA = [
  {
    id: '1',
    title: 'RUSTY DRIVE',
    image:
      'https://res.cloudinary.com/demo/image/upload/w_260,h_200,c_crop,g_north/sample.jpg',
  },
  {
    id: '2',
    title: 'SABOR MORENO',
    image:
      'https://res.cloudinary.com/demo/image/upload/w_260,h_200,c_crop,g_north/sample.jpg',
  },
  {
    id: '3',
    title: '0 MESTRE PUB',
    image:
      'https://res.cloudinary.com/demo/image/upload/w_260,h_200,c_crop,g_north/sample.jpg',
  },
  {
    id: '4',
    title: 'GRILL 54 CHEF',
    image:
      'https://res.cloudinary.com/demo/image/upload/w_260,h_200,c_crop,g_north/sample.jpg',
  },
  {
    id: '5',
    title: 'RUSTY DRIVE',
    image:
      'https://res.cloudinary.com/demo/image/upload/w_260,h_200,c_crop,g_north/sample.jpg',
  },
  {
    id: '6',
    title: 'SABOR MORENO',
    image:
      'https://res.cloudinary.com/demo/image/upload/w_260,h_200,c_crop,g_north/sample.jpg',
  },
  {
    id: '7',
    title: 'RUSTY DRIVE',
    image:
      'https://res.cloudinary.com/demo/image/upload/w_260,h_200,c_crop,g_north/sample.jpg',
  },
  {
    id: '8',
    title: 'SABOR MORENO',
    image:
      'https://res.cloudinary.com/demo/image/upload/w_260,h_200,c_crop,g_north/sample.jpg',
  },
  {
    id: '9',
    title: 'RUSTY DRIVE',
    image:
      'https://res.cloudinary.com/demo/image/upload/w_260,h_200,c_crop,g_north/sample.jpg',
  },
  {
    id: '10',
    title: 'SABOR MORENO',
    image:
      'https://res.cloudinary.com/demo/image/upload/w_260,h_200,c_crop,g_north/sample.jpg',
  },
];

const ClientList = ({navigation, headercomponet, footerComponent, onPress}) => {
  const _renderItem = ({item: service}) => (
    <Pressable
      style={styles.profileService}
      //  onPress={() => onPress(navigation.navigate('ClientProfile'))}
    >
      <Image
        source={require('../../../assets/guest.png')}
        style={{height: SCREEN_HEIGHT * 0.12, width: SCREEN_WIDTH * 0.24}}
      />
      <Text style={{color: color.primary, fontSize: 16, fontWeight: 'bold'}}>
        Phranks
      </Text>
      <Text
        style={{
          color: color.grey,
          fontSize: 12,
          marginVertical: SCREEN_HEIGHT * 0.01,
        }}>
        Jessusgibbs@hotmail.com
      </Text>
      <TouchableWithoutFeedback>
        <View style={[styles.btn, {backgroundColor: color.successText}]}>
          <FontAwesome name="phone" style={styles.btnIcon} />
          <Text style={styles.btnText}>Contact</Text>
        </View>
      </TouchableWithoutFeedback>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: SCREEN_WIDTH * 0.02,
          marginVertical: SCREEN_HEIGHT * 0.02,
        }}>
        <View>
          <Text style={styles.pageTitle}>My Clients</Text>
        </View>
        <View>
          <SearchBar />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: SCREEN_WIDTH * 0.025,
          marginVertical: SCREEN_HEIGHT * 0.025,
        }}>
        <TouchableWithoutFeedback>
          <View style={[styles.btn, {backgroundColor: color.grey}]}>
            <FontAwesome name="trash-o" style={styles.btnIcon} />
            <Text style={styles.btnText}>Delete Client</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={[styles.btn, {backgroundColor: color.primary}]}>
            <FontAwesome name="plus-circle" style={styles.btnIcon} />
            <Text style={styles.btnText}>Add Client</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>

      <FlatList
        data={DATA}
        renderItem={_renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={headercomponet}
        ListFooterComponent={footerComponent}
      />
    </View>
  );
};

export default ClientList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SCREEN_WIDTH * 0.02,
  },
  pageTitle: {
    fontWeight: 'bold',
    color: color.primary,
    fontSize: 18,
  },
  profileService: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.white,
    borderColor: color.grey,
    borderWidth: 1,
    borderRadius: SCREEN_HEIGHT * 0.01,
    padding: SCREEN_WIDTH * 0.015,
    flex: 1,
    marginHorizontal: SCREEN_WIDTH * 0.02,
    marginBottom: SCREEN_HEIGHT * 0.02,
    ...globalStyles.shadow,
  },
  btn: {
    flexDirection: 'row',
    paddingHorizontal: SCREEN_WIDTH * 0.03,
    paddingVertical: SCREEN_HEIGHT * 0.005,
    justifyContent: 'center',
    borderRadius: normalize(2),
  },
  btnIcon: {
    color: color.white,
    fontSize: 14,
    marginHorizontal: SCREEN_WIDTH * 0.02,
    marginTop: SCREEN_HEIGHT * 0.003,
  },
  btnText: {
    color: color.white,
    textAlign: 'center',
  },
});
