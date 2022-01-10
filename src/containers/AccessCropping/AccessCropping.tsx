import React, { Component } from 'react';
import commonUtils from '../../components/lib/commonUtils';
import DefaultAccessCroppingContent from './AccessCroppingContent';
import DefaultFooter from '../../components/Footer/Footer';

export class AccessCropping extends Component {
  commonUtils: { setTitleAndScroll: (pageTitle: string) => void };

  constructor(props: any) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('Access Cropping Case Study'); }

  render(): JSX.Element {
    return (
      <>
        <div className="page-content">
          <DefaultAccessCroppingContent />
        </div>
        <DefaultFooter />
      </>
    );
  }
}

export default AccessCropping;
