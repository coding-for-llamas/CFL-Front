import React, { Component } from 'react';
import commonUtils from '../../components/lib/commonUtils';
import DefaultContactContent from './ContactContent';
import DefaultFooter from '../../components/Footer/Footer';

export class Contact extends Component {
  commonUtils: { setTitleAndScroll: (pageTitle: string) => void };

  constructor(props) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount() { this.commonUtils.setTitleAndScroll('Contact Me'); }

  render() {
    return (
      <>
        <div className="page-content">
          <DefaultContactContent />
        </div>
        <DefaultFooter />
      </>
    );
  }
}

export default Contact;
