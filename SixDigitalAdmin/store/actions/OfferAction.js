export const CREATE_OFFER = 'CREATE_OFFER';
export const SET_OFFERS = 'SET_OFFERS';
export const Update_OFFERS = 'Update_OFFERS';
import baseUrl from '../../style/baseUrl';

export const createNewOffer = (
  title,
  description,
  actual_cost,
  image,
  real_cost,
  user_id,
  admin_id,
) => {
  return async dispatch => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('actual_cost', actual_cost);
    formData.append('real_cost', real_cost);
    formData.append('user_id', user_id);
    formData.append('admin_id', admin_id);
    formData.append('image', image);
    const response = await fetch(baseUrl.url + 'api/v1/offers', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    });

    const resData = await response.json();

    dispatch({
      type: CREATE_OFFER,
      homeData: resData,
    });
  };
};

export const getOfferByUser = user_id => {
  return async dispatch => {
    const response = await fetch(baseUrl.url + 'api/v1/offers/adminlist', {
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
      type: SET_OFFERS,
      offerData: resData,
    });
  };
};

export const updateOfferStatus = (id, status) => {
  return async dispatch => {
    const response = await fetch(baseUrl.url + 'api/v1/offers/update', {
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
      type: Update_OFFERS,
      offerData: resData,
    });
  };
};
