import React, { Component } from 'react';
import commonUtils from '../../components/lib/commonUtils';
import DefaultWorkContent from './WorkContent';
import Footer from '../../components/Footer/Footer';

export class Work extends Component {
  commonUtils: { setTitleAndScroll: (pageTitle: string) => void };

  constructor(props: any) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('My Work'); }

  render(): JSX.Element {
    return (
      <>
        <div className="page-content">
          <DefaultWorkContent />
        </div>
        <Footer />
      </>
    );
  }
}

export default Work;
