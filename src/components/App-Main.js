import React, { PureComponent } from 'react';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import DefaultHomepage from '../containers/Homepage/Homepage';

export default class AppTemplate extends PureComponent {
  constructor(props) {
    super(props);
    this.children = props.children;// eslint-disable-line react/prop-types
  }

  render() {
    return (
      <div className="container">
        <DefaultHomepage />
      </div>
    );
  }
}
