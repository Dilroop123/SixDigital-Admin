export const CREATE_PROJECT = 'CREATE_PROJECT';

import baseUrl from '../../style/baseUrl';

export const createProject = (service_id, name, charges, image, user_id) => {
  return async dispatch => {
    const formData = new FormData();
    formData.append('service_id', service_id);
    formData.append('name', name);
    formData.append('charges', charges);
    formData.append('user_id', user_id);
    formData.append('image', image);
    const response = await fetch(baseUrl.url + 'api/v1/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    });

    const resData = await response.json();

    dispatch({
      type: CREATE_PROJECT,
      homeData: resData,
    });
  };
};
