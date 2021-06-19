import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import MianStack from './navigation/navigation';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <MianStack />
    </NavigationContainer>
  );
};

export default App;
