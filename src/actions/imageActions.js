// @ts-nocheck
import request from 'superagent';

export const fetchImages = () => ({
  type: 'FETCH_IMAGES',
});

export const receiveImages = (docs) => ({
  type: 'FETCHED_IMAGES',
  data: docs,
});

export const receiveError = (e) => ({
  type: 'RECEIVE_ERROR',
  error: e,
});

const getImages = () => (dispatch, getState) => {
  const { images } = getState();
  const type = 'img';
  if (images.images !== undefined && images.images.length > 0) return Promise.resolve(true);
  dispatch(fetchImages());
  return request.get(`${process.env.BackendUrl}/documents?type=${type}`).set('Accept', 'application/json')
    .then((data) => {
      if (data.body.message === 'Not Found') return dispatch(receiveError(new Error('No pictures found!!')));
      return dispatch(receiveImages(data.body));
    })
    .catch((err) => dispatch(receiveError(err)));
};

export default getImages;
