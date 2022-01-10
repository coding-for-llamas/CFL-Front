import React from 'react';
import { render } from 'react-dom';
import DefaultApp from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/css/main.scss';

render(
  <DefaultApp />,
  document.getElementById('root'),
);

/* istanbul ignore next */
if (process.env.NODE_ENV === 'development' && module.hot) module.hot.accept();
