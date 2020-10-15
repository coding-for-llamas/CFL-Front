import React, { Component } from 'react';
import commonUtils from '../../components/lib/commonUtils';
import DefaultAboutContent from './AboutContent';
import DefaultFooter from '../../components/Footer/Footer';

export class About extends Component {
  commonUtils: { setTitleAndScroll: (pageTitle: string) => void };

  constructor(props: any) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('About'); }

  render(): JSX.Element {
    return (
      <>
        <div className="page-content">
          <DefaultAboutContent />
        </div>
        <DefaultFooter />
      </>
    );
  }
}

export default About;
