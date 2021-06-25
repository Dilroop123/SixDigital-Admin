import React from 'react';

import {
  FlatList,
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';

const Chat = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Text>Chat screen</Text>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
