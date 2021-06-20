import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import MianStack from './navigation/navigation';

import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';

import profileReducer from './store/reducers/ProfileReducer';
import serviceReducer from './store/reducers/ServiceReducer';

const rootReducer = combineReducers({
  profile: profileReducer,
  service: serviceReducer,
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <Provider store={store}>
        <MianStack />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
