import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import normalize from 'react-native-normalize';
import {useDispatch} from 'react-redux';
import * as ProjectsAction from '../../../../store/actions/ProjectAction';
import Button from '../../../../components/Button';
import TextField from '../../../../components/TextField';
import moment from 'moment';
// import * as CreditActions from '../../../store/actions/CreditAction';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const CreateTimelineModal = ({setModalVisible, projectId}) => {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const date = moment();

  const dispatch = useDispatch();

  const onpressHandler = () => {
    dispatch(
      ProjectsAction.createNewTask(
        title,
        description,
        projectId,
        '60cb713a0cf5463694069353',
      ),
    );
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TextField value={title} onChangeText={setTitle} label="Title" />

      <View style={{marginTop: SCREEN_HEIGHT * 0.01}}>
        <TextField
          value={description}
          onChangeText={setDescription}
          label="Description"
        />
      </View>
      <View style={{marginTop: SCREEN_HEIGHT * 0.02}}>
        <Button onPress={() => onpressHandler()} />
      </View>
    </View>
  );
};

export default CreateTimelineModal;

const styles = StyleSheet.create({
  container: {
    padding: normalize(24),
    width: SCREEN_WIDTH * 0.8,
    height: SCREEN_HEIGHT * 0.35,
  },
});
