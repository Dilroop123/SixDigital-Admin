export const SET_SERVICE = 'SET_SERVICE';
export const CREATE_SERVICE = 'CREATE_SERVICE';
export const SET_SERVICE_REQUEST = 'SET_SERVICE_REQUEST';
export const UPDATE_SERVICE_REQUEST = 'UPDATE_SERVICE_REQUEST';
import baseUrl from '../../style/baseUrl';

export const getServices = () => {
  return async dispatch => {
    const response = await fetch(baseUrl.url + 'api/v1/services');

    const resData = await response.json();

    dispatch({type: SET_SERVICE, serviceData: resData});
  };
};

export const createService = (image, cover_image, name, description) => {
  return async dispatch => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('image', image);
    formData.append('cover_image', cover_image);
    const response = await fetch(baseUrl.url + 'api/v1/services', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    });

    const resData = await response.json();

    dispatch({
      type: CREATE_SERVICE,
      projectData: resData,
    });
  };
};

export const getServiceRequest = () => {
  return async dispatch => {
    const response = await fetch(baseUrl.url + 'api/v1/requests/list');

    const resData = await response.json();

    dispatch({type: SET_SERVICE_REQUEST, servicerequestData: resData});
  };
};

export const deleteServiceRequest = (request_id, status) => {
  return async dispatch => {
    const response = await fetch(baseUrl.url + 'api/v1/requests/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        request_id,
        status,
      }),
    });

    const resData = await response.json();

    dispatch({
      type: UPDATE_SERVICE_REQUEST,
      offerData: resData,
    });
  };
};
