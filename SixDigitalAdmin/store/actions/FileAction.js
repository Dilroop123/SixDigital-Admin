export const SEND_FILE = 'SEND_FILE';
export const SET_FILE = 'SET_FILE';
export const SET_INVOICE = 'SET_INVOICE';
export const CREATE_INVOICE = 'CREATE_INVOICE';
export const UPDATE_INVOICE = 'UPDATE_INVOICE';

import baseUrl from '../../style/baseUrl';

export const sendFile = (user_id, image, name, send_type) => {
  return async dispatch => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('user_id', user_id);
    formData.append('send_type', send_type);
    formData.append('image', image);
    const response = await fetch(baseUrl.url + 'api/v1/documents', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    });

    const resData = await response.json();

    dispatch({
      type: SEND_FILE,
      homeData: resData,
    });
  };
};

export const createInvoice = (user_id, image, name) => {
  console.log(user_id);
  console.log(image);
  console.log(name);
  return async dispatch => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('user_id', user_id);
    formData.append('image', image);
    const response = await fetch(baseUrl.url + 'api/v1/invoices', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    });

    const resData = await response.json();
    // console.log(resData);
    dispatch({
      type: CREATE_INVOICE,
      homeData: resData,
    });
  };
};

export const getFiles = user_id => {
  return async dispatch => {
    const response = await fetch(baseUrl.url + 'api/v1/documents/find', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id,
      }),
    });

    const resData = await response.json();
    dispatch({
      type: SET_FILE,
      fileData: resData,
    });
  };
};

export const getInvoice = user_id => {
  return async dispatch => {
    const response = await fetch(baseUrl.url + 'api/v1/invoices/find', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id,
      }),
    });

    const resData = await response.json();

    dispatch({
      type: SET_INVOICE,
      invoiceData: resData,
    });
  };
};

export const updateInvoiceStatus = invoice_id => {
  return async dispatch => {
    const response = await fetch(baseUrl.url + 'api/v1/invoices/paid', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        invoice_id,
      }),
    });

    const resData = await response.json();

    dispatch({
      type: UPDATE_INVOICE,
      invoiceData: resData,
    });
  };
};
