/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {
  Dimensions,
  TouchableWithoutFeedback,
  Pressable,
  FlatList,
  StyleSheet,
  Image,
  Button,
  Text,
  View,
} from 'react-native';
import {normalize} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import globalStyles from '../../../style/globalStyles';

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
];

const Profile = ({navigation, headercomponet, footerComponent, onPress}) => {
  const _renderItem = ({item: service}) => (
    <Pressable
      style={styles.profileService}
      onPress={() => onPress(service.title)}>
      <FontAwesome5 name="file-invoice-dollar" style={styles.serviceIcon} />
      <Text style={styles.title}>Create Job</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: color.white,
          marginTop: SCREEN_HEIGHT * 0.001,
          marginHorizontal: SCREEN_HEIGHT * 0.02,
          padding: SCREEN_HEIGHT * 0.02,
          marginBottom: SCREEN_HEIGHT * 0.05,
          alignItems: 'center',
          borderRadius: normalize(10),
          ...globalStyles.shadow,
        }}>
        <View style={{flex: 0.7}}>
          <Image
            style={{
              height: SCREEN_HEIGHT * 0.1,
              width: SCREEN_HEIGHT * 0.1,
              borderRadius: normalize(50),
            }}
            source={require('../../../../assets/guest.png')}
          />
        </View>
        <View
          style={{
            backgroundColor: color.lightGrey,
            marginHorizontal: SCREEN_WIDTH * 0.05,
          }}
        />
        <View style={{flex: 2, marginVertical: SCREEN_HEIGHT * 0.02}}>
          <Text
            style={{
              color: color.primary,
              fontSize: 16,
              fontWeight: 'bold',
              textTransform: 'capitalize',
            }}>
            Jesus Gillobs
          </Text>
          <Text
            style={{
              color: color.grey,
              fontSize: 12,
              flex: 1,
              marginVertical: SCREEN_HEIGHT * 0.008,
            }}>
            Jessusgibbs@hotmail.com
          </Text>
        </View>
        <View
          style={{
            flex: 0.2,
            backgroundColor: color.successText,
            padding: SCREEN_HEIGHT * 0.003,
          }}>
          <FontAwesome
            name="volume-control-phone"
            style={{color: color.white, fontSize: 18}}
          />
        </View>
      </View>
      <FlatList
        data={DATA}
        renderItem={_renderItem}
        keyExtractor={item => item.id}
        numColumns={3}
        ListHeaderComponent={headercomponet}
        ListFooterComponent={footerComponent}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: SCREEN_HEIGHT * 0.03,
    paddingHorizontal: SCREEN_WIDTH * 0.05,
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
  },
  serviceIcon: {
    marginVertical: SCREEN_HEIGHT * 0.015,
    color: color.primary,
    fontSize: 50,
  },
  title: {
    color: color.grey,
    fontSize: 14,
    marginVertical: SCREEN_HEIGHT * 0.01,
  },
  selectedIcon: {
    marginVertical: SCREEN_HEIGHT * 0.015,
    color: color.white,
    fontSize: 50,
  },
  selectedService: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.primary,
    borderColor: color.primary,
    borderWidth: 1,
    borderRadius: SCREEN_HEIGHT * 0.01,
    padding: SCREEN_WIDTH * 0.015,
    flex: 1,
    marginHorizontal: SCREEN_WIDTH * 0.02,
    marginBottom: SCREEN_HEIGHT * 0.02,
  },
  selectedTitle: {
    color: color.white,
    fontSize: 14,
    marginVertical: SCREEN_HEIGHT * 0.01,
  },
});
