import React, { Component } from 'react';
import commonUtils from '../../components/lib/commonUtils';
import DefaultColourMePhoneyContent from './ColourMePhoneyContent';
import DefaultFooter from '../../components/Footer/Footer';

export class ColourMePhoney extends Component {
  commonUtils: { setTitleAndScroll: (pageTitle: string) => void };

  constructor(props: any) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('Colour Me Phoney Case Study'); }

  render(): JSX.Element {
    return (
      <>
        <div className="page-content">
          <DefaultColourMePhoneyContent />
        </div>
        <DefaultFooter />
      </>
    );
  }
}

export default ColourMePhoney;
