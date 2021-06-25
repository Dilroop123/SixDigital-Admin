/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import color from '../../../style/color';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from 'react-native';
import {Pressable} from 'react-native';
import globalStyles from '../../../style/globalStyles';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../style/fontSize';
import normalize from 'react-native-normalize';

const ProjectList = ({projectData, onPress}) => {
  const _renderItem = ({item: project}) => (
    <Pressable onPress={() => onPress(project)}>
      <View style={styles.proffesion}>
        <View>
          <Image
            style={styles.profImg}
            source={{uri: project?.image?.publicUrl}}
          />
        </View>
        <View style={{marginHorizontal: '3%', flex: 1}}>
          <Text style={styles.profTitle}>{project?.name}</Text>
          <Text style={styles.profDesc}>
            {project?.timeline[project?.timeline?.length - 1]?.description}
          </Text>
          <View style={{flexDirection: 'row', marginTop: '2%'}}>
            <Text style={{color: color.purple, fontSize: 14, flex: 1}}>
              Status :{' '}
              <Text style={{color: color.successText}}>{project?.status}</Text>
            </Text>
            <Text style={{color: color.grey, fontSize: 14}}>
              from{' '}
              <Text style={{color: color.purple, fontWeight: 'bold'}}>
                &#x24; {project?.charges}
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={projectData}
        renderItem={_renderItem}
        keyExtractor={item => item._id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ProjectList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  proffesion: {
    marginBottom: SCREEN_HEIGHT * 0.02,
    flexDirection: 'row',
    padding: SCREEN_HEIGHT * 0.01,
    borderRadius: SCREEN_HEIGHT * 0.02,
    backgroundColor: '#fff',
    ...globalStyles.shadow,
  },
  profImg: {
    height: SCREEN_HEIGHT * 0.1,
    width: SCREEN_HEIGHT * 0.12,
    borderRadius: normalize(5),
  },
  profTitle: {
    color: color.primary,
    fontSize: SCREEN_HEIGHT * 0.02,
    fontWeight: 'bold',
  },
  profDesc: {
    color: color.grey,
    marginTop: '2%',
    fontSize: SCREEN_HEIGHT * 0.017,
    textAlign: 'justify',
  },
});
