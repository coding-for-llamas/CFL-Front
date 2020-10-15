import React, { PureComponent } from 'react';
import DefaultHomeContent from './HomepageContent';

export class Homepage extends PureComponent {
  render(): any {
    return (
      <div className="page-content">
        <DefaultHomeContent />
      </div>
    );
  }
}

export default Homepage;
