/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {Pressable, StyleSheet, Text, View} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import color from '../../../style/color';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../style/fontSize';
import ProfileCard from './ProfileCard';

const Card = ({title, onPress, iconName}) => (
  <Pressable style={styles.profileService} onPress={onPress}>
    <FontAwesome name={iconName} style={styles.serviceIcon} />
    <Text style={styles.title}>{title}</Text>
  </Pressable>
);

const Profile = ({client, onPress}) => {
  return (
    <View style={styles.container}>
      <ProfileCard client={client} />
      <View style={{flexDirection: 'row'}}>
        <Card
          title="Create Project"
          onPress={() => onPress('CreateProject', client?._id)}
          iconName="edit"
        />
        <Card
          title="My Projects"
          onPress={() => onPress('MyProjects', client?._id)}
          iconName="briefcase"
        />
        <Card
          title="Create Offer"
          onPress={() => onPress('Offer', client?._id)}
          iconName="ge"
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Card
          title="Credentials"
          onPress={() => onPress('Credentials', client?._id)}
          iconName="puzzle-piece"
        />
        <Card
          title="Files/Reports"
          onPress={() => onPress('File', client?._id)}
          iconName="file-text-o"
        />
        <Card
          title="Invoices"
          onPress={() => onPress('Invoice', client?._id)}
          iconName="file-zip-o"
        />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileService: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.white,
    borderColor: color.darkGrey,
    borderWidth: 1,
    borderRadius: SCREEN_HEIGHT * 0.01,
    padding: SCREEN_WIDTH * 0.015,
    flex: 1,
    marginHorizontal: SCREEN_WIDTH * 0.02,
    marginBottom: SCREEN_HEIGHT * 0.02,
  },
  serviceIcon: {
    marginVertical: SCREEN_HEIGHT * 0.015,
    color: color.primary,
    fontSize: 50,
  },
  title: {
    color: color.grey,
    fontSize: 14,
    marginVertical: SCREEN_HEIGHT * 0.01,
  },
});
