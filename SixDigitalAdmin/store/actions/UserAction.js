export const SET_USERS = 'SET_USERS';
export const DELETE_CLIENT = 'DELETE_CLIENT';
import baseUrl from '../../style/baseUrl';

export const getUsers = () => {
  return async dispatch => {
    const response = await fetch(baseUrl.url + 'api/v1/users');

    const resData = await response.json();

    dispatch({type: SET_USERS, userdata: resData});
  };
};

export const deleteClient = (id, status) => {
  return async dispatch => {
    const response = await fetch(baseUrl.url + 'api/v1/users/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        status,
      }),
    });

    const resData = await response.json();

    dispatch({
      type: DELETE_CLIENT,
      offerData: resData,
    });
  };
};
