export const SET_SAVED_CREDENTIALS = 'SET_SAVED_CREDENTIALS';
import baseUrl from '../../style/baseUrl';

export const getSavedCredentials = user_id => {
  return async dispatch => {
    const response = await fetch(baseUrl.url + 'api/v1/credentials/find', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id,
      }),
    });

    const resData = await response.json();

    dispatch({type: SET_SAVED_CREDENTIALS, savedCredentials: resData});
  };
};
