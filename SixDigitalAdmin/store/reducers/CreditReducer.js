import {SET_SAVED_CREDENTIALS} from '../actions/CreditAction';
const initialState = {
  SavedCrdentials: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SAVED_CREDENTIALS:
      return {
        ...state,
        SavedCrdentials: action.savedCredentials,
      };
  }
  return state;
};
