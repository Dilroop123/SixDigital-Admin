/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import color from '../../style/color';
import {useDispatch, useSelector} from 'react-redux';
import AppHeader from '../../components/AppHeader';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../style/fontSize';
import RequestForm from './components/RequestForm';
import * as ServiceAction from '../../store/actions/ServiceAction';

const CreateProject = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {userId} = route.params;
  const serviceData = useSelector(state => state.service.ServiceData);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(ServiceAction.getServices());
    });
  }, [dispatch, navigation]);
  return (
    <View style={styles.container}>
      <View style={{flex: 1, margin: SCREEN_WIDTH * 0.05}}>
        <AppHeader onPress={() => navigation.pop()} />
        <RequestForm
          serviceData={serviceData?.data}
          userId={userId}
          onpress={() => navigation.pop()}
        />
      </View>
    </View>
  );
};

export default CreateProject;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: color.white,
  },
});
