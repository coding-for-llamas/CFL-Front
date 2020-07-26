import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import DefaultApp from './App';
import store from './redux/store/index';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/css/main.scss';

render(
  <Provider store={store.store}>
    <DefaultApp />
  </Provider>,
  document.getElementById('root'),
);
