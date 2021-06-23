export const SET_PROJECTS = 'SET_PROJECTS';
import baseUrl from '../../style/baseUrl';

export const getProjectByUser = userId => {
  return async dispatch => {
    const response = await fetch(
      `${baseUrl}api/v1/projects?user_id=${encodeURIComponent(userId)}`,
      {
        method: 'GET',
      },
    );

    const resData = await response.json();

    dispatch({type: SET_PROJECTS, serviceData: resData});
  };
};
