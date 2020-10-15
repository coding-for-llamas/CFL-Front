// @ts-nocheck
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import DefaultApp from './App';
import store from './redux/store/index';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/css/main.scss';

render(
  <Provider store={store.store}>
    <PersistGate loading={null} persistor={store.persistor}>
      <DefaultApp />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);

/* istanbul ignore next */
if (process.env.NODE_ENV === 'development' && module.hot) module.hot.accept();
