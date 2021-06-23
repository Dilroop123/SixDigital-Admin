import React from 'react';

import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import * as ProjectAction from '../../store/actions/ProjectAction';
import color from '../../style/color';

import AppHeader from '../../components/AppHeader';
import ProjectList from './components/ProjectList';

const MyProjects = ({navigation, route}) => {
  const {userId} = route.params;
  const dispatch = useDispatch();
  const projectData = useSelector(state => state.user.UsersData);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(ProjectAction.getProjectByUser(userId));
    });
  }, [dispatch, navigation, userId]);
  return (
    <View style={styles.container}>
      <AppHeader />
      <ProjectList
        onPress={client => navigation.navigate('ClientProfile', {client})}
        projectData={projectData?.data}
      />
    </View>
  );
};

export default MyProjects;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
});
