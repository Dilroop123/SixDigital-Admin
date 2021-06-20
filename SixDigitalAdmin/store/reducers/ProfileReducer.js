import {CREATE_PROJECT} from '../actions/ProfileAction';
const initialState = {
  ProfileData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PROJECT:
      return {
        ...state,
      };
  }
  return state;
};
