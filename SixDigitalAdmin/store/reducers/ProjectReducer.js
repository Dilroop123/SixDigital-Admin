import {SET_PROJECTS, CREATE_TASK} from '../actions/ProjectAction';
const initialState = {
  ProjectData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PROJECTS:
      return {
        ...state,
        ProjectData: action.projectData,
      };
    case CREATE_TASK:
      return {
        ...state,
      };
  }
  return state;
};
