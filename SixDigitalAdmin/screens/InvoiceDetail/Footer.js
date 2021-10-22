/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {Text, View, Pressable} from 'react-native';

import {SCREEN_HEIGHT} from '../../style/fontSize';
import normalize from 'react-native-normalize';
import color from '../../style/color';
import globalStyles from '../../style/globalStyles';
import HeaderText from '../../components/HeaderText';
import {Dropdown} from '../Invoice/CreateInvoice/components/Dropdown';

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
const Footer = ({invoice, onBackPress, onChangeStatus}) => {
  const [status, setStatus] = React.useState('');
  return (
    <View>
      <View style={{marginVertical: SCREEN_HEIGHT * 0.01}}>
        <HeaderText text="Date" />
      </View>
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
          ...globalStyles.shadow,
        }}>
        <View>
          <Text style={{color: color.primary, fontWeight: 'bold'}}>
            Invoice Date
          </Text>
          <Text style={{color: color.grey}}>{invoice?.invoice_date}</Text>
        </View>

        <View>
          <Text style={{color: color.primary, fontWeight: 'bold'}}>
            Due Date
          </Text>
          <Text style={{color: color.grey}}>$ {invoice?.due_date}</Text>
        </View>
      </View>

      <View
        style={{
          marginTop: SCREEN_HEIGHT * 0.02,
          backgroundColor: color.lightBlue,
          padding: SCREEN_HEIGHT * 0.02,
          borderRadius: SCREEN_HEIGHT * 0.01,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{color: color.grey}}>Sub Total</Text>
          <Text style={{color: color.grey}}>$ {invoice?.sub_total}</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: SCREEN_HEIGHT * 0.01,
          }}>
          <Text style={{color: color.grey}}>Tax (${invoice?.tax})</Text>
          <Text style={{color: color.grey}}>$ {invoice?.sub_total}</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: SCREEN_HEIGHT * 0.01,
          }}>
          <Text style={{color: color.primary, fontWeight: 'bold'}}>Total</Text>
          <Text style={{color: color.primary, fontWeight: 'bold'}}>
            $ {invoice?.total}
          </Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: color.lightBlue,
          padding: SCREEN_HEIGHT * 0.01,
          marginTop: SCREEN_HEIGHT * 0.01,
        }}>
        <Dropdown
          options={statusOptions}
          onChange={setStatus}
          placeholder="Select status.."
          label="Status"
        />
        <Pressable
          style={{
            padding: SCREEN_HEIGHT * 0.01,
            backgroundColor: color.primary,
            borderRadius: SCREEN_HEIGHT * 0.01,
            alignItems: 'center',
            marginTop: SCREEN_HEIGHT * 0.02,
          }}
          onPress={() => onChangeStatus(status)}>
          <Text style={{color: color.white}}>Update Status</Text>
        </Pressable>
        <Pressable
          style={{
            padding: SCREEN_HEIGHT * 0.01,
            backgroundColor: color.primary,
            borderRadius: SCREEN_HEIGHT * 0.01,
            alignItems: 'center',
            marginTop: SCREEN_HEIGHT * 0.02,
          }}
          onPress={() => onBackPress()}>
          <Text style={{color: color.white}}>Go Back</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Footer;
