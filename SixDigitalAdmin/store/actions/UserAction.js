export const SET_USERS = 'SET_USERS';
import baseUrl from '../../style/baseUrl';

export const getUsers = () => {
  return async dispatch => {
    const response = await fetch(baseUrl.url + 'api/v1/users');

    const resData = await response.json();

    dispatch({type: SET_USERS, userdata: resData});
  };
};
