import {
  SET_SERVICE,
  CREATE_SERVICE,
  SET_SERVICE_REQUEST,
  UPDATE_SERVICE_REQUEST,
} from '../actions/ServiceAction';
const initialState = {
  ServiceData: [],
  ServiceRequestData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SERVICE:
      return {
        ...state,
        ServiceData: action.serviceData,
      };
    case CREATE_SERVICE:
      return {
        ...state,
      };
    case SET_SERVICE_REQUEST:
      return {
        ...state,
        ServiceRequestData: action.servicerequestData,
      };
    case UPDATE_SERVICE_REQUEST:
      return {
        ...state,
      };
  }
  return state;
};
