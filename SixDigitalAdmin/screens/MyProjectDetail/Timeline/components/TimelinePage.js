/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import color from '../../../../style/color';
import normalize from 'react-native-normalize';
import globalStyles from '../../../../style/globalStyles';
import ProjectCard from './ProjectCard';
import moment from 'moment';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const STEP_INDICATOR_HEIGHT = SCREEN_HEIGHT * 0.04;

const TimelinePage = ({projectDetail}) => {
  const [showDescription, setShowDescription] = React.useState(false);
  const [onPressPosition, setSetOnPressPosition] = React.useState();

  const toggleVisiblity = position => {
    setSetOnPressPosition(position);
    setShowDescription(!showDescription);
  };

  const renderItems = ({item: timeline, index}) => (
    <TouchableWithoutFeedback
      onPress={() => toggleVisiblity(index)}
      style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', flex: 1}}>
          <View>
            <Text style={{width: SCREEN_WIDTH * 0.07}}>
              {moment(timeline.created_date).format('DD MMM')}
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <View
              style={{
                height: STEP_INDICATOR_HEIGHT,
                width: STEP_INDICATOR_HEIGHT,
                borderRadius: STEP_INDICATOR_HEIGHT / 2,
                backgroundColor:
                  onPressPosition === index ? color.orange : color.successText,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: color.white}}>{index + 1}</Text>
            </View>
            {index + 1 !== projectDetail?.timeline.length && (
              <View
                style={{
                  height: showDescription ? 0 : SCREEN_HEIGHT * 0.08,
                  flex: showDescription ? 1 : 0,
                  width: 3,
                  backgroundColor: '#909090',
                }}
              />
            )}
          </View>
          <View
            style={{
              marginHorizontal: SCREEN_WIDTH * 0.05,
              flex: 1,
            }}>
            <Text
              style={{
                color: 'gray',
                fontWeight: 'bold',
                fontSize: normalize(16),
              }}>
              {timeline.title}
            </Text>
            {!!showDescription && onPressPosition === index && (
              <View
                style={{
                  marginVertical: SCREEN_HEIGHT * 0.02,
                  borderRadius: normalize(10),
                  ...globalStyles.shadow,
                  backgroundColor: color.white,
                  padding: SCREEN_HEIGHT * 0.01,
                  marginRight: SCREEN_WIDTH * 0.02,
                }}>
                <Text>{timeline.description}</Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );

  return (
    <View style={styles.container}>
      <View style={styles.indicatorContainer}>
        <Text
          style={{
            color: color.grey,
            fontSize: SCREEN_HEIGHT * 0.018,
            marginVertical: SCREEN_HEIGHT * 0.03,
          }}>
          Remark Timeline
        </Text>

        <FlatList
          data={projectDetail?.timeline}
          keyExtractor={item => item._id}
          renderItem={renderItems}
          ListHeaderComponent={
            <ProjectCard
              charges={projectDetail?.charges}
              name={projectDetail?.name}
              status={projectDetail?.status}
              image={projectDetail?.image?.publicUrl}
            />
          }
          ListFooterComponent={<View style={{height: SCREEN_HEIGHT * 0.3}} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default TimelinePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
});
