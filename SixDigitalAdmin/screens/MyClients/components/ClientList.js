/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {
  Pressable,
  FlatList,
  Platform,
  StyleSheet,
  Image,
  Text,
  View,
  Linking,
} from 'react-native';
import {normalize} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import globalStyles from '../../../style/globalStyles';
import SearchBar from '../../../components/SearchBar';
import color from '../../../style/color';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../style/fontSize';

const ClientList = ({onPress, usersData, onDeletePress}) => {
  const [flatListData, setFlatListData] = React.useState();

  React.useEffect(() => {
    setFlatListData(usersData);
  }, [usersData]);

  const onPresshandler = number => {
    let phoneNumber = '';
    if (Platform.OS === 'android') {
      phoneNumber = `tel:${number}`;
    } else {
      phoneNumber = `telprompt:${number}`;
    }
    Linking.openURL(phoneNumber);
  };

  const _renderItem = ({item: client}) => (
    <Pressable style={styles.profileService} onPress={() => onPress(client)}>
      <Image
        source={require('../../../assets/account.png')}
        style={{height: SCREEN_HEIGHT * 0.1, width: SCREEN_HEIGHT * 0.1}}
      />
      <MaterialCommunityIcons
        name="delete"
        color="black"
        onPress={() => onDeletePress(client)}
        size={SCREEN_HEIGHT * 0.03}
        style={{marginTop: SCREEN_HEIGHT * 0.02}}
      />
      <Text style={{color: color.primary, fontSize: 16, fontWeight: 'bold'}}>
        {client?.first_name}
      </Text>
      <Text
        style={{
          color: color.grey,
          fontSize: 12,
          marginVertical: SCREEN_HEIGHT * 0.01,
        }}>
        {client?.email}
      </Text>
      {!!client?.phone && (
        <Pressable onPress={() => onPresshandler(client?.phone)}>
          <View style={[styles.btn, {backgroundColor: color.successText}]}>
            <FontAwesome name="phone" style={styles.btnIcon} />
            <Text style={styles.btnText}>Contact</Text>
          </View>
        </Pressable>
      )}
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

      <FlatList
        data={flatListData}
        renderItem={_renderItem}
        extraData={flatListData}
        keyExtractor={item => item._id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
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
