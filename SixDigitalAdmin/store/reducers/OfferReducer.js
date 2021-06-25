import {CREATE_OFFER, SET_OFFERS, Update_OFFERS} from '../actions/OfferAction';
const initialState = {
  OfferData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_OFFER:
      return {
        ...state,
      };
    case SET_OFFERS:
      return {
        ...state,
        OfferData: action.offerData,
      };
    case Update_OFFERS:
      return {
        ...state,
      };
  }
  return state;
};
