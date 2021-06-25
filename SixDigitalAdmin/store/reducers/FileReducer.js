import {
  SEND_FILE,
  SET_FILE,
  CREATE_INVOICE,
  UPDATE_INVOICE,
  SET_INVOICE,
} from '../actions/FileAction';
const initialState = {
  FileData: [],
  InvoiceData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEND_FILE:
      return {
        ...state,
      };
    case SET_FILE:
      return {
        ...state,
        FileData: action.fileData,
      };
    case CREATE_INVOICE:
      return {
        ...state,
        FileData: action.fileData,
      };
    case UPDATE_INVOICE:
      return {
        ...state,
      };
    case SET_INVOICE:
      return {
        ...state,
        InvoiceData: action.invoiceData,
      };
  }
  return state;
};
