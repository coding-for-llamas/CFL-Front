import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/css/main.scss';
import DefaultApp from './App';
import store from './redux/store/index';

render(
  <Provider store={store.store}>
    <DefaultApp />
  </Provider>,
  document.getElementById('root'),
);
