/* eslint-disable react-native/no-inline-styles */

import React from 'react';

import {Dimensions, StyleSheet, FlatList, View} from 'react-native';
import {useSelector} from 'react-redux';
import FileItem from '../component/FileItem';

const SCREEN_HEIGHT = Dimensions.get('window').height;

const Recieved = ({navigation}) => {
  //  const dispatch = useDispatch();
  const fileDAta = useSelector(state => state.file.FileData);

  const userUploaded = fileDAta?.data?.filter(
    file => file?.send_type === 'userUploaded',
  );

  const _renderItem = ({item: document}) => <FileItem document={document} />;
  return (
    <View style={styles.container}>
      <FlatList
        data={userUploaded}
        renderItem={_renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item._id}
        ListFooterComponent={<View style={{height: SCREEN_HEIGHT * 0.3}} />}
      />
    </View>
  );
};

export default Recieved;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },
});
