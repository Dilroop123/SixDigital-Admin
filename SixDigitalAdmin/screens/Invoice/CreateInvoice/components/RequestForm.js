/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Button,
  FlatList,
  Modal,
  KeyboardAvoidingView,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {normalize} from 'react-native-elements';

import {Dropdown} from './Dropdown';
import {useDispatch} from 'react-redux';
import globalStyles from '../../../../style/globalStyles';
import TextField from '../../../../components/TextField';
import * as FileAction from '../../../../store/actions/FileAction';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import color from '../../../../style/color';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../../style/fontSize';

import ModalHeader from './ModalHeader';
import moment from 'moment';

const RquestForm = ({userId}) => {
  const [name, setName] = React.useState('');
  const [price, setPrice] = React.useState('');

  const [show, setShow] = React.useState(false);
  const [status, setStatus] = React.useState('');
  const [invoiceDate, setInvoiceDate] = React.useState(new Date());
  const [dueDate, setDueDate] = React.useState(new Date());
  const [mode, setMode] = React.useState();
  const [modalVisible, setModalVisible] = React.useState(false);
  const [services, setServices] = React.useState([]);

  const dispatch = useDispatch();

  const statusOptions = [
    {
      key: 'Unpaid',
      text: 'Unpaid',
    },
    {
      key: 'Paid',
      text: 'Paid',
    },
    {
      key: 'Overdue',
      text: 'Overdue',
    },
  ];

  const onPressHandler = () => {
    dispatch(
      FileAction.createInvoice(
        userId,
        services,
        moment(invoiceDate).format('DD MMM,YYYY'),
        moment(dueDate).format('DD MMM,YYYY'),
        status,
      ),
    );
  };

  const onModalClose = () => {
    setServices([...services, {name, price}]);
    setModalVisible(false);
    setName('');
    setPrice('');
  };

  const onChange = (event, selectedDate) => {
    setShow(false);
    mode === 'invoice'
      ? setInvoiceDate(selectedDate || invoiceDate)
      : setDueDate(selectedDate || dueDate);
  };

  const configurePicker = value => {
    setMode(value);
    setShow(true);
  };

  return (
    <KeyboardAvoidingView
      behavior="position"
      // enabled={enableShift}
      style={styles.container}>
      <View>
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
                title="Add Service"
                onpress={() => setModalVisible(!modalVisible)}
              />

              <View style={styles.model}>
                <TextField
                  value={name}
                  onChangeText={setName}
                  label="Enter Name"
                />
                <TextField
                  value={price}
                  onChangeText={setPrice}
                  label="Enter Price"
                />

                <View style={{marginTop: SCREEN_HEIGHT * 0.02}}>
                  <Button
                    title="Add"
                    color={color.primary}
                    onPress={() => onModalClose()}
                  />
                </View>
              </View>
            </View>
          </View>
        </Modal>
        <Text style={styles.pageTitle}>Create Invoice</Text>

        <View style={styles.requestServiceContainer}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View>
              <Text style={styles.col6input}>Invoice Date</Text>
              <Pressable
                style={{
                  backgroundColor: color.white,
                  padding: SCREEN_HEIGHT * 0.01,
                  borderRadius: SCREEN_HEIGHT * 0.015,
                }}
                onPress={() => configurePicker('invoice')}>
                <Text style={{fontSize: SCREEN_HEIGHT * 0.018, color: 'black'}}>
                  {moment(invoiceDate).format('DD MMM,YYYY')}
                </Text>
              </Pressable>
            </View>

            <View style={{marginLeft: SCREEN_HEIGHT * 0.01}}>
              <Text style={styles.col6input}>Due Date</Text>
              <Pressable
                style={{
                  backgroundColor: color.white,
                  padding: SCREEN_HEIGHT * 0.01,
                  borderRadius: SCREEN_HEIGHT * 0.015,
                }}
                onPress={() => configurePicker('due')}>
                <Text style={{fontSize: SCREEN_HEIGHT * 0.018, color: 'black'}}>
                  {moment(dueDate).format('DD MMM,YYYY')}
                </Text>
              </Pressable>
            </View>
          </View>
          <Dropdown
            options={statusOptions}
            onChange={setStatus}
            placeholder="Select status.."
            label="Status"
          />
          <View
            style={{
              marginHorizontal: SCREEN_HEIGHT * 0.08,
              marginTop: SCREEN_HEIGHT * 0.02,
            }}>
            <Button
              title="Add Services"
              color={color.primary}
              onPress={() => setModalVisible(true)}
            />
          </View>

          {services.length > 0 && (
            <View
              style={{
                marginVertical: SCREEN_HEIGHT * 0.015,
                height: SCREEN_HEIGHT * 0.25,
              }}>
              <FlatList
                data={services}
                extraData={services}
                showsVerticalScrollIndicator
                keyExtractor={item => item.name}
                renderItem={({item}) => (
                  <View
                    style={{
                      flexDirection: 'row',
                      backgroundColor: color.white,
                      marginTop: SCREEN_HEIGHT * 0.001,
                      padding: SCREEN_HEIGHT * 0.02,
                      marginBottom: SCREEN_HEIGHT * 0.01,
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderRadius: normalize(10),
                    }}>
                    <Text>{item?.name}</Text>
                    <View style={{flexDirection: 'row'}}>
                      <Text>$ {item?.price}</Text>
                      <MaterialCommunityIcons
                        name="delete"
                        color="red"
                        onPress={() =>
                          setServices(
                            services.filter(
                              service => service.name !== item.name,
                            ),
                          )
                        }
                        size={SCREEN_HEIGHT * 0.03}
                        style={{marginLeft: SCREEN_HEIGHT * 0.02}}
                      />
                    </View>
                  </View>
                )}
              />
            </View>
          )}

          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={mode === 'invoice' ? invoiceDate : dueDate}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}

          <View style={{marginTop: SCREEN_HEIGHT * 0.02}}>
            <Button
              title="Submit"
              color={color.primary}
              onPress={onPressHandler}
            />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default RquestForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: SCREEN_WIDTH * 0.05,
    marginVertical: SCREEN_HEIGHT * 0.02,
  },
  pageTitle: {
    fontWeight: 'bold',
    color: color.primary,
    marginTop: SCREEN_HEIGHT * 0.02,
    fontSize: 20,
  },
  requestServiceContainer: {
    backgroundColor: color.lightBlue,
    borderRadius: normalize(8),
    padding: SCREEN_WIDTH * 0.05,
  },

  col6input: {
    width: SCREEN_WIDTH * 0.36,
    padding: SCREEN_WIDTH * 0.01,
  },
  input: {
    height: SCREEN_HEIGHT * 0.05,
    borderWidth: 1,
    borderColor: color.grey,
    backgroundColor: color.white,
    borderRadius: normalize(10),
  },
  model: {
    padding: normalize(24),
    width: SCREEN_WIDTH * 0.8,
    height: SCREEN_HEIGHT * 0.35,
  },
});
