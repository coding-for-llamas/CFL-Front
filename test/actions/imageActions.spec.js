import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import getImages, { fetchImages } from '../../src/actions/imageActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
  images: {
    images: [],
    error: '',
  },
});
describe('async actions', () => {
  it('test fetch images', async () => {
    const data = fetchImages([]);
    expect(data.type).toBe('FETCH_IMAGES');
  });
  it('test get images', async () => {
    const result = await store.dispatch(getImages());
    expect(result).toBeTruthy();
  });
});
