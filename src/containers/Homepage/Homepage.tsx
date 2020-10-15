import React, { Component } from 'react';
import DefaultHomeContent from './HomepageContent';

export class Homepage extends Component {
  render() {
    return (
      <div className="page-content">
        <DefaultHomeContent />
      </div>
    );
  }
}

export default Homepage;
