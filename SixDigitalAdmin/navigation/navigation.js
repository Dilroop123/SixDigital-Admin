/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Pressable} from 'react-native';
import globalStyles from '../style/globalStyles';
import {createStackNavigator} from '@react-navigation/stack';
import normalize from 'react-native-normalize';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import color from '../style/color';

import {SCREEN_WIDTH, SCREEN_HEIGHT} from '../style/fontSize';

import AppHeader from '../components/AppHeader';

import MyClients from '../screens/MyClients';
import ServiceRequest from '../screens/ServiceRequest';

const Stack = createStackNavigator();
const TabTop = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

const MARGIN_TOP = SCREEN_HEIGHT * 0.02;
const ICON_SIZE = SCREEN_HEIGHT * 0.03;
const FONT_SIZE = normalize(16);

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {/* <Stack.Screen name="MainHome" component={Home} />
      <Stack.Screen name="MyProjectDetail" component={MyProjectDetail} />
      <Stack.Screen name="MyOffers" component={MyOffers} />
      <Stack.Screen
        name="PopularServiceDescription"
        options={({route}) => ({title: route.params.screenTitle})}
        component={PopularServiceDescription}
      /> */}
    </Stack.Navigator>
  );
}
function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="MyClients">
      <Drawer.Screen
        name="MyClients"
        component={MyClients}
        options={{drawerLabel: 'MyClients'}}
      />
      <Drawer.Screen
        name="ServiceRequest"
        component={ServiceRequest}
        options={{drawerLabel: 'ServiceRequest'}}
      />
    </Drawer.Navigator>
  );
}
export default function MianStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {/* <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} /> */}
      <Stack.Screen name="HomeScreen" component={MyDrawer} />
    </Stack.Navigator>
  );
}
