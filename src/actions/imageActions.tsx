import request from 'superagent';

interface IImageActions {
  type: string;
  data?: any;
  error?: any;
}

export const fetchImages = (): IImageActions => ({
  type: 'FETCH_IMAGES',
});

export const receiveImages = (docs: any): IImageActions => ({
  type: 'FETCHED_IMAGES',
  data: docs,
});

export const receiveError = (e: any): IImageActions => ({
  type: 'RECEIVE_ERROR',
  error: e,
});

const getImages = () => (dispatch: any, getState: any): Promise<boolean> => {
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
