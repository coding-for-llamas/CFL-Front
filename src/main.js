import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import '../static/css/main.scss';
import App from './App';
import store from './redux/store/index';

render(
  <Provider store={store.store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
