/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import * as ProjectAction from '../../store/actions/ProjectAction';
import color from '../../style/color';

import AppHeader from '../../components/AppHeader';
import ProjectList from './components/ProjectList';
import {SCREEN_HEIGHT} from '../../style/fontSize';
import normalize from 'react-native-normalize';
import HeaderText from '../../components/HeaderText';

const MyProjects = ({navigation, route}) => {
  const {userId} = route.params;

  const dispatch = useDispatch();
  const projectData = useSelector(state => state.project.ProjectData);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(ProjectAction.getProjectByUser(userId));
    });
  }, [dispatch, navigation, userId]);

  return (
    <View style={styles.container}>
      <View style={{marginBottom: SCREEN_HEIGHT * 0.03}}>
        <AppHeader onPress={() => navigation.pop()} />
      </View>
      <View style={{marginBottom: SCREEN_HEIGHT * 0.03}}>
        <HeaderText text="My Projects" />
      </View>

      <ProjectList
        onPress={project =>
          navigation.navigate('MyProjectDetail', {project, userId})
        }
        projectData={projectData?.data}
      />
    </View>
  );
};

export default MyProjects;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SCREEN_HEIGHT * 0.03,
    backgroundColor: color.white,
  },
});
