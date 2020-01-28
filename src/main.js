import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import '../static/css/styles.scss';
import App from './App';
import store from './redux/store/index';

render(
  <Provider store={store.store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
