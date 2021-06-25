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
import offerReducer from './store/reducers/OfferReducer';
import fileReducer from './store/reducers/FileReducer';
import cardReducer from './store/reducers/CreditReducer';

const rootReducer = combineReducers({
  profile: profileReducer,
  service: serviceReducer,
  user: userReducer,
  project: projectReducer,
  offer: offerReducer,
  file: fileReducer,
  card: cardReducer,
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
