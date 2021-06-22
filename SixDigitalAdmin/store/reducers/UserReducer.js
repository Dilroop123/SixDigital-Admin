import {SET_USERS} from '../actions/UserAction';
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
  }
  return state;
};
