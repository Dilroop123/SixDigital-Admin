import React from 'react';
import {DrawerActions} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import * as UserAction from '../../store/actions/UserAction';
import color from '../../style/color';
import DrawerHeader from '../../components/DrawerHeader';
import ClientList from './components/ClientList';

const MyClients = ({navigation}) => {
  const dispatch = useDispatch();
  const usersData = useSelector(state => state.user.UsersData);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(UserAction.getUsers());
    });
  }, [dispatch, navigation]);
  return (
    <View style={styles.container}>
      <DrawerHeader
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
      <ClientList
        onPress={client => navigation.navigate('ClientProfile', {client})}
        usersData={usersData?.data}
      />
    </View>
  );
};

export default MyClients;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
});
