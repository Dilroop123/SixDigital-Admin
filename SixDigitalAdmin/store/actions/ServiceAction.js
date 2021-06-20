export const SET_SERVICE = 'SET_SERVICE';
import baseUrl from '../../style/baseUrl';

export const getServices = () => {
  return async dispatch => {
    const response = await fetch(baseUrl.url + 'api/v1/services');

    const resData = await response.json();

    dispatch({type: SET_SERVICE, serviceData: resData});
  };
};
