import { combineReducers } from 'redux';
import imagesReducer from './reducers/imagesReducer';

const reducer = combineReducers({
  images: imagesReducer,
});

export default reducer;
