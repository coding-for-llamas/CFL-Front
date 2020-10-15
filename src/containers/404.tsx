import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';

export default class FourOhFour extends PureComponent {
  render(): JSX.Element {
    return (
      <div className="container">
        <div className="fof">404 - Page not available.</div>
        <Redirect to="/daycare" />
      </div>
    );
  }
}
