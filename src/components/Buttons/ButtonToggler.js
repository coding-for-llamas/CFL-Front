import React, { PureComponent } from 'react';

export default class ButtonToggler extends PureComponent {
  render() {
    return (
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
    );
  }
}
