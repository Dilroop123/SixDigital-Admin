/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import normalize from 'react-native-normalize';
import * as CreditAction from '../../store/actions/CreditAction';
import {useSelector, useDispatch} from 'react-redux';
import SubmittedList from './components/SubmittedList';
import color from '../../style/color';
import AppHeader from '../../components/AppHeader';
import {SCREEN_HEIGHT} from '../../style/fontSize';

const Credentials = ({navigation, route}) => {
  const savedCrdentials = useSelector(state => state.card.SavedCrdentials);

  const {userId} = route.params;

  const dispatch = useDispatch();

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(CreditAction.getSavedCredentials(userId));
    });
  }, [dispatch, navigation, userId]);

  return (
    <View style={styles.container}>
      <AppHeader onPress={() => navigation.pop()} />
      <Text
        style={{
          fontWeight: 'bold',
          color: color.primary,
          marginTop: SCREEN_HEIGHT * 0.04,
        }}>
        Submitted Credentials
      </Text>
      <SubmittedList savedCrdentials={savedCrdentials?.data} />
    </View>
  );
};

export default Credentials;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: normalize(24),
    backgroundColor: 'white',
  },
});
