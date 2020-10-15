import React, { Component } from 'react';
import commonUtils from '../../components/lib/commonUtils';
import DefaultHomeContent from './HomepageContent';

export class Homepage extends Component {
  commonUtils: { setTitleAndScroll: (pageTitle: string) => void };

  constructor(props: any) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount(): void { this.commonUtils.setTitleAndScroll(''); }

  render(): JSX.Element {
    return (
      <div className="page-content">
        <DefaultHomeContent />
      </div>
    );
  }
}

export default Homepage;
