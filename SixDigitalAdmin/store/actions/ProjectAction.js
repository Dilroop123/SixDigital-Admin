export const SET_PROJECTS = 'SET_PROJECTS';
export const CREATE_TASK = 'CREATE_TASK';
import baseUrl from '../../style/baseUrl';

export const getProjectByUser = user_id => {
  return async dispatch => {
    const response = await fetch(baseUrl.url + 'api/v1/projects/find', {
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
      type: SET_PROJECTS,
      projectData: resData,
    });
  };
};

export const createNewTask = (title, description, id, admin_id) => {
  return async dispatch => {
    const response = await fetch(baseUrl.url + 'api/v1/projects/timeline', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        description,
        id,
        admin_id,
      }),
    });

    const resData = await response.json();

    dispatch({
      type: CREATE_TASK,
      projectData: resData,
    });
  };
};
