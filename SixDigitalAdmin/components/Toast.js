/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Dimensions, Text, Animated} from 'react-native';
const SCREEN_HEIGHT = Dimensions.get('window').height;
import globalStyles from '../style/globalStyles';
import color from '../style/color';
import {SCREEN_WIDTH} from '../style/fontSize';

const Toast = ({message}) => {
  const opacity = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.delay(2000),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  });
  return (
    <Animated.View
      style={{
        position: 'absolute',
        top: SCREEN_HEIGHT / 3,
        opacity,
        transform: [
          {
            translateY: opacity.interpolate({
              inputRange: [0, 1],
              outputRange: [-120, 0],
            }),
          },
        ],
        width: SCREEN_WIDTH * 0.8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.lightBlue,
        padding: SCREEN_HEIGHT * 0.01,
        borderRadius: 4,
        ...globalStyles.shadow,
      }}>
      <Text>{message}</Text>
    </Animated.View>
  );
};

export default Toast;
