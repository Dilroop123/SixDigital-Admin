/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import normalize from 'react-native-normalize';
import ProjectDetailContext from '../context/ProjectDetailContext';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import color from '../style/color';
import Upload from '../screens/File/Upload';
import Recieved from '../screens/File/Recieved';
import {SCREEN_WIDTH, SCREEN_HEIGHT} from '../style/fontSize';

import AppHeader from '../components/AppHeader';

import MyClients from '../screens/MyClients';
import ClientProfile from '../screens/ClientProfile';
import ServiceRequest from '../screens/ServiceRequest';
import CreateProject from '../screens/CreateProject';
import MyProjects from '../screens/My Projects';
import Timeline from '../screens/MyProjectDetail/Timeline';
import CreateService from '../screens/CreateService';
import Invoice from '../screens/Invoice/';
import Chat from '../screens/MyProjectDetail/Chat';
import CreateOffer from '../screens/Offer/CreateOffer';
import OurServices from '../screens/OurServices';
import Credentials from '../screens/Credentials';
import ViewOffer from '../screens/Offer/ViewOffer';
import OfferContext from '../context/OfferContext';
import FileContext from '../context/FileContext';

const Stack = createStackNavigator();
const TabTop = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

function MyProjectDetail({route, navigation}) {
  const contextValue = {
    project: route.params.project,
    usedId: route.params.userId,
  };
  return (
    <ProjectDetailContext.Provider value={contextValue}>
      <AppHeader
        onPress={() => navigation.pop()}
        style={{
          backgroundColor: color.lightBlue,
          padding: SCREEN_HEIGHT * 0.02,
        }}
      />
      <TabTop.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: color.primary,
          indicatorStyle: {
            backgroundColor: color.lightBlue,
            height: '100%',
          },
          labelStyle: {fontSize: SCREEN_HEIGHT * 0.018, fontWeight: 'bold'},
          style: {backgroundColor: '#fff'},
        }}>
        <TabTop.Screen name="Home" component={Timeline} />
        <TabTop.Screen name="Chat" component={Chat} />
      </TabTop.Navigator>
    </ProjectDetailContext.Provider>
  );
}

function File({route}) {
  return (
    <FileContext.Provider value={route.params.userId}>
      <View style={{flex: 1}}>
        <AppHeader
          style={{
            backgroundColor: color.lightBlue,
            padding: SCREEN_HEIGHT * 0.02,
          }}
        />
        <TabTop.Navigator
          initialRouteName="Upload"
          tabBarOptions={{
            activeTintColor: color.primary,
            indicatorStyle: {
              backgroundColor: color.lightBlue,
              height: '100%',
            },
            labelStyle: {fontSize: SCREEN_HEIGHT * 0.018, fontWeight: 'bold'},
            style: {backgroundColor: '#fff'},
          }}>
          <TabTop.Screen name="Upload" component={Upload} />
          <TabTop.Screen name="Recieved" component={Recieved} />
        </TabTop.Navigator>
      </View>
    </FileContext.Provider>
  );
}

function Offer({route, navigation}) {
  return (
    <OfferContext.Provider value={route.params.userId}>
      <AppHeader
        onPress={() => navigation.pop()}
        style={{
          backgroundColor: color.lightBlue,
          padding: SCREEN_HEIGHT * 0.02,
        }}
      />
      <TabTop.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: color.primary,
          indicatorStyle: {
            backgroundColor: color.lightBlue,
            height: '100%',
          },
          labelStyle: {fontSize: SCREEN_HEIGHT * 0.018, fontWeight: 'bold'},
          style: {backgroundColor: '#fff'},
        }}>
        <TabTop.Screen name="CreateOffer" component={CreateOffer} />
        <TabTop.Screen name="ViewOffer" component={ViewOffer} />
      </TabTop.Navigator>
    </OfferContext.Provider>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="MyClients" component={MyClients} />
      <Stack.Screen name="ClientProfile" component={ClientProfile} />
      <Stack.Screen name="CreateProject" component={CreateProject} />
      <Stack.Screen name="MyProjects" component={MyProjects} />
      <Stack.Screen name="MyProjectDetail" component={MyProjectDetail} />
      <Stack.Screen name="Offer" component={Offer} />
      <Stack.Screen name="File" component={File} />
      <Stack.Screen name="Credentials" component={Credentials} />
      <Stack.Screen name="Invoice" component={Invoice} />
    </Stack.Navigator>
  );
}

function ServiceStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="OurServices" component={OurServices} />
      <Stack.Screen name="CreateService" component={CreateService} />
    </Stack.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="MyClients">
      <Drawer.Screen
        name="HomeStack"
        component={HomeStack}
        options={{drawerLabel: 'My Clients'}}
      />
      <Drawer.Screen
        name="OurServices"
        component={ServiceStack}
        options={{drawerLabel: 'Our Services'}}
      />
      <Drawer.Screen
        name="ServiceRequest"
        component={ServiceRequest}
        options={{drawerLabel: 'Service Request'}}
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
