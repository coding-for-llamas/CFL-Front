import React, { PureComponent } from 'react';

export default class Footer extends PureComponent {
  render() {
    return (
      <div className="page-footer text-center">
        <a className="btn-floating btn-gh mx-1" href="https://github.com/coding-for-llamas" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github fa-2x"> </i>
        </a>
        <a className="btn-floating btn-tw mx-1" href="https://twitter.com/codingforllamas" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter fa-2x"> </i>
        </a>
        <a className="btn-floating btn-fb mx-1" href="https://www.facebook.com/codingforllamas" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-square fa-2x"> </i>
        </a>
        <p className="sm-txt">
          Powered by &nbsp;
          <a href="https://codingforllamas.com" target="_blank" rel="noopener noreferrer">
            Coding For Llamas
          </a>
        </p>
      </div>
    );
  }
}
