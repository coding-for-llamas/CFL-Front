import React, { Component } from 'react';
import commonUtils from '../../components/lib/commonUtils';
import DefaultCafeLatteContent from './CafeLatteContent';
import DefaultFooter from '../../components/Footer/Footer';

export class Contact extends Component {
  commonUtils: { setTitleAndScroll: (pageTitle: string) => void };

  constructor(props: any) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('Cafe Latte Case Study'); }

  render(): JSX.Element {
    return (
      <>
        <div className="page-content">
          <DefaultCafeLatteContent />
        </div>
        <DefaultFooter />
      </>
    );
  }
}

export default Contact;
