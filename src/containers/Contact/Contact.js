import React, { Component } from 'react';
import commonUtils from '../../components/lib/commonUtils';
import DefaultFooter from '../../components/Footer/Footer';

export class Contact extends Component {
  constructor(props) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount() { this.commonUtils.setTitleAndScroll('Contact Me'); }

  render() {
    return (
      <div className="page-content">
        <main id="contact">
          <h1 className="lg-heading">
            Contact
            {' '}
            <span className="text-secondary">Me</span>
          </h1>

          <h2 className="sm-heading">
            Want to talk? Here&apos;s where I can be reached!
          </h2>

          <div className="contact-info">
            <div className="contact contact-1">
              <p>
                <a href="mailto:rhayven@codingforllamas.com">Email</a>
                <br />
                <a href="https://www.facebook.com/codingforllamas/">Facebook</a>
                <br />
                <a href="https://twitter.com/codingforllamas">Twitter</a>
                <br />
                <a href="https://github.com/unesdala">Github</a>
              </p>
            </div>
          </div>
        </main>
        <DefaultFooter />
      </div>
    );
  }
}

export default Contact;
