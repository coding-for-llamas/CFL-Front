// @ts-nocheck
import React, { Component } from 'react';
import commonUtils from '../../components/lib/commonUtils';
import DefaultHomeContent from './HomepageContent';

export class Homepage extends Component {
  constructor(props) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount() { this.commonUtils.setTitleAndScroll(''); }

  render() {
    return (
      <div className="page-content">
        <DefaultHomeContent />
      </div>
    );
  }
}

export default Homepage;
