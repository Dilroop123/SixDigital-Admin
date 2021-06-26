/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  FlatList,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import color from '../../style/color';
import globalStyles from '../../style/globalStyles';
import * as ServiceAction from '../../store/actions/ServiceAction';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../style/fontSize';
import normalize from 'react-native-normalize';
import { useDispatch, useSelector } from 'react-redux';

const ServiceRequest = ({ navigation }) => {
  const dispatch = useDispatch();
  const serviceRequestData = useSelector(
    state => state.service.ServiceRequestData?.data,
  );

  const [flatListData, setFlatListData] = React.useState();

  React.useEffect(() => {
    setFlatListData(serviceRequestData);
  }, [serviceRequestData]);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(ServiceAction.getServiceRequest());
    });
  }, [dispatch, navigation]);

  const deleteItem = id => {
    dispatch(ServiceAction.deleteServiceRequest(id, 'Completed'));
    // const data = flatListData.filter(item => item._id !== id);

    setFlatListData(flatListData.filter(item => item._id !== id));
  };

  const _renderItem = ({ item: project }) => (
    <View style={styles.proffesion}>
      <View>
        <Image
          style={styles.profImg}
          source={{ uri: project?.service_id?.image?.publicUrl }}
        />
      </View>
      <View style={{ marginHorizontal: '3%', flex: 1 }}>
        <Text style={styles.profTitle}>{project?.service_id?.name}</Text>
        <Text style={styles.profDesc}>{project?.service_id?.description}</Text>
        <View style={{ marginTop: '2%' }}>
          <Text style={{ color: color.grey, fontSize: 14 }}>
            Client :{' '}
            <Text style={{ color: color.primary }}>
              {project?.user_id?.first_name}
            </Text>
          </Text>
          <Text style={{ color: color.grey, fontSize: 14 }}>
            Email{' '}
            <Text style={{ color: color.purple, fontWeight: 'bold' }}>
              {project?.user_id?.email}
            </Text>
          </Text>
        </View>
        <MaterialCommunityIcons
          name="delete"
          color="black"
          onPress={() => deleteItem(project?._id)}
          style={{
            alignSelf: 'flex-end',
            marginTop: SCREEN_HEIGHT * 0.01,
          }}
          size={SCREEN_HEIGHT * 0.03}
        />
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Service Requests</Text>
      <FlatList
        data={flatListData}
        renderItem={_renderItem}
        extraData={flatListData}
        contentContainerStyle={{ marginTop: SCREEN_HEIGHT * 0.02 }}
        keyExtractor={item => item._id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ServiceRequest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SCREEN_HEIGHT * 0.03,
  },
  pageTitle: {
    fontWeight: 'bold',
    color: color.primary,
    fontSize: 18,
  },
  proffesion: {
    marginBottom: SCREEN_HEIGHT * 0.02,
    flexDirection: 'row',
    padding: SCREEN_HEIGHT * 0.01,
    borderRadius: SCREEN_HEIGHT * 0.02,
    backgroundColor: '#fff',
    ...globalStyles.shadow,
  },
  profImg: {
    height: SCREEN_HEIGHT * 0.1,
    width: SCREEN_HEIGHT * 0.12,
    borderRadius: normalize(5),
  },
  profTitle: {
    color: color.primary,
    fontSize: SCREEN_HEIGHT * 0.02,
    fontWeight: 'bold',
  },
  profDesc: {
    color: color.grey,
    marginTop: '2%',
    maxHeight: SCREEN_HEIGHT * 0.046,
    fontSize: SCREEN_HEIGHT * 0.017,
    textAlign: 'justify',
  },
});
