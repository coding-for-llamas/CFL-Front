import React, { Component } from 'react';
import commonUtils from '../../components/lib/commonUtils';
import DefaultHomeContent from './HomepageContent';

export class Homepage extends Component {
  constructor(props) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount() { this.commonUtils.setTitleAndScroll(''); }

  get currentStyles() {
    let result = {};
    this.style = 'cfl';
    result = {
      backgroundImagePath: '../../../static/img/background.jpg',
    };
    return result;
  }

  render(backgroundImagePath) {
    return (
      <div className="page-content">
        <DefaultHomeContent backgroundImagePath={backgroundImagePath} />
      </div>
    );
  }
}

export default Homepage;
