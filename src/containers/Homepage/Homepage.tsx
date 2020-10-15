import React, { PureComponent } from 'react';
import DefaultHomeContent from './HomepageContent';

export class Homepage extends PureComponent {
  render(): JSX.Element {
    return (
      <div className="page-content">
        <DefaultHomeContent />
      </div>
    );
  }
}

export default Homepage;
