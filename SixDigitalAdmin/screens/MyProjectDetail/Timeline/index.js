/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import color from '../../../style/color';
import {SCREEN_WIDTH, SCREEN_HEIGHT} from '../../../style/fontSize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Pressable, StyleSheet, View, Text, Modal} from 'react-native';
import normalize from 'react-native-normalize';
import TimelinePage from './components/TimelinePage';
import AppHeader from '../../../components/AppHeader';
import CreateTimelineModal from './components/CreateTimelineModal';
import ModalHeader from './components/ModalHeader';
import ProjectDetailContext from '../../../context/ProjectDetailContext';
import globalStyles from '../../../style/globalStyles';

const Timeline = ({route}) => {
  const projectDetail = React.useContext(ProjectDetailContext);
  const [modalVisible, setModalVisible] = React.useState(false);
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
              title="New Task"
              onpress={() => setModalVisible(!modalVisible)}
            />

            <CreateTimelineModal
              projectId={projectDetail?.project?._id}
              setModalVisible={setModalVisible}
            />
          </View>
        </View>
      </Modal>
      <View style={{flexDirection: 'row'}}>
        <Pressable onPress={() => setModalVisible(true)}>
          <View style={[styles.btn, {backgroundColor: color.primary}]}>
            <Ionicons
              name="md-add-circle-outline"
              color={color.white}
              size={SCREEN_HEIGHT * 0.02}
              style={{marginRight: SCREEN_WIDTH * 0.02}}
            />
            <Text style={{color: color.white}}>Create New Task</Text>
          </View>
        </Pressable>
      </View>
      <TimelinePage projectDetail={projectDetail?.project} />
    </View>
  );
};

export default Timeline;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: normalize(24),
    backgroundColor: color.white,
  },
  btn: {
    flexDirection: 'row',
    paddingHorizontal: SCREEN_WIDTH * 0.03,
    paddingVertical: SCREEN_HEIGHT * 0.005,

    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(2),
  },
});
