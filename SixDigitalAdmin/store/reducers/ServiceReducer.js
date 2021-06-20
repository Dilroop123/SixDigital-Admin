import {SET_SERVICE} from '../actions/ServiceAction';
const initialState = {
  ServiceData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SERVICE:
      return {
        ...state,
        ServiceData: action.serviceData,
      };
  }
  return state;
};
