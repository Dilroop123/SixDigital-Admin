import {SET_PROJECTS} from '../actions/ProjectAction';
const initialState = {
  ProjectData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PROJECTS:
      return {
        ...state,
      };
  }
  return state;
};
