import React, { PureComponent } from 'react';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import DefaultHomepage from '../containers/Homepage/Homepage';

export default class AppTemplate extends PureComponent {
  render() {
    return (
      <DefaultHomepage />
    );
  }
}
