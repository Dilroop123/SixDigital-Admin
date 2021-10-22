import {SET_USERS, DELETE_CLIENT} from '../actions/UserAction';
const initialState = {
  UsersData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        UsersData: action.userdata,
      };
    case DELETE_CLIENT:
      return {
        ...state,
      };
  }
  return state;
};
