/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Toast from 'react-native-simple-toast';

import {DrawerActions} from '@react-navigation/native';
import {StyleSheet, View, Modal} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import * as UserAction from '../../store/actions/UserAction';
import color from '../../style/color';
import DrawerHeader from '../../components/DrawerHeader';
import ClientList from './components/ClientList';
import ModalHeader from './components/ModalHeader';
import globalStyles from '../../style/globalStyles';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../style/fontSize';
import Button from '../../components/Button';
import TextField from '../../components/TextField';
import normalize from 'react-native-normalize';

const MyClients = ({navigation}) => {
  const dispatch = useDispatch();
  const usersData = useSelector(state => state.user.UsersData);

  const [modalVisible, setModalVisible] = React.useState(false);
  const [user, setUser] = React.useState();
  const [title, setTitle] = React.useState('');

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(UserAction.getUsers());
    });
  }, [dispatch, navigation]);

  const onpressHandler = () => {
    setModalVisible(false);
    if (title === user?.first_name) {
      dispatch(UserAction.deleteClient(user?._id, false));

      Toast.show(
        user?.first_name + ' is Deleted ,Reload the application',
        Toast.LONG,
      );
    } else {
      Toast.show('Not Matched ,Please type the name correctly');
    }
  };

  const onDeletePress = selectedCLient => {
    setUser(selectedCLient);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Modal
        presentationStyle="overFullScreen"
        transparent
        style={{margin: 0}}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: color.lightBlue,
              borderRadius: 20,
              ...globalStyles.shadow,
            }}>
            <ModalHeader
              title="Delete Client"
              onpress={() => setModalVisible(!modalVisible)}
            />

            <View style={styles.model}>
              <TextField
                value={title}
                onChangeText={setTitle}
                label="Enter the name of the Client to delete"
              />

              <View style={{marginTop: SCREEN_HEIGHT * 0.02}}>
                <Button onPress={() => onpressHandler()} />
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <View style={{marginTop: SCREEN_HEIGHT * 0.04}}>
        <DrawerHeader
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
      </View>

      <ClientList
        onPress={client => navigation.navigate('ClientProfile', {client})}
        usersData={usersData?.data}
        onDeletePress={selectedCLient => onDeletePress(selectedCLient)}
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
  model: {
    padding: normalize(24),
    width: SCREEN_WIDTH * 0.8,
    height: SCREEN_HEIGHT * 0.35,
  },
});
