/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { DrawerActions } from '@react-navigation/native';
import { Text, Pressable, StyleSheet, Image, View, FlatList } from 'react-native';
import color from '../../style/color';
import { useDispatch, useSelector } from 'react-redux';
import * as ServiceAction from '../..//store/actions/ServiceAction';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../style/fontSize';
import DrawerHeader from '../../components/DrawerHeader';
import Header from './Header';

const OurServices = ({ navigation, onPress }) => {
  const dispatch = useDispatch();
  const serviceData = useSelector(state => state.service.ServiceData);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(ServiceAction.getServices());
    });
  }, [dispatch, navigation]);

  const _renderItem = ({ item: service }) => (
    <Pressable style={styles.services}>
      <View style={styles.serviceIconArea}>
        <Image
          style={{
            height: SCREEN_HEIGHT * 0.1,
            width: SCREEN_HEIGHT * 0.1,
          }}
          source={{ uri: service?.image?.publicUrl }}
        />
      </View>

      <Text style={styles.serviceText}>{service.name}</Text>
    </Pressable>
  );
  return (
    <View style={styles.container}>
      <DrawerHeader
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
      <View style={{ marginTop: SCREEN_HEIGHT * 0.02 }}>
        <Header
          leftLabel="Our Services"
          rightLabel="Add New Service"
          onPress={() => navigation.navigate('CreateService')}
        />
      </View>
      <View>
        <FlatList
          data={serviceData?.data}
          renderItem={_renderItem}
          keyExtractor={item => item._id}
          numColumns={3}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ marginTop: SCREEN_HEIGHT * 0.03 }}
        />
      </View>
    </View>
  );
};

export default OurServices;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SCREEN_HEIGHT * 0.02,
    backgroundColor: color.white,
  },
  services: {
    backgroundColor: color.lightBlue,
    borderRadius: SCREEN_HEIGHT * 0.01,
    padding: SCREEN_WIDTH * 0.02,
    flex: 1,
    marginHorizontal: SCREEN_WIDTH * 0.02,
    marginBottom: SCREEN_HEIGHT * 0.02,
  },
  serviceIconArea: {
    backgroundColor: color.white,
    borderRadius: SCREEN_HEIGHT * 0.01,
    alignItems: 'center',
  },
  serviceText: {
    textAlign: 'center',
    marginTop: 8,
    color: color.grey,
  },
});
