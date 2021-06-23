import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import MianStack from './navigation/navigation';

import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';

import profileReducer from './store/reducers/ProfileReducer';
import serviceReducer from './store/reducers/ServiceReducer';
import userReducer from './store/reducers/UserReducer';
import projectReducer from './store/reducers/ProjectReducer';

const rootReducer = combineReducers({
  profile: profileReducer,
  service: serviceReducer,
  user: userReducer,
  project: projectReducer,
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
