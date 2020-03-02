import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ReactResizeDetector from 'react-resize-detector';
import DefaultCollapsableNav from './CollapsableNav';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.parentRef = React.createRef();
    this.onResize = this.onResize.bind(this);
    this.state = { width: 320 };
  }

  onResize(width) {
    this.setState({ width });
  }

  render() {
    const { width } = this.state;
    return (
      <>
        {width <= 768 - 18 || width === 751
          ? (
            <DefaultCollapsableNav />
          ) : (
            <nav className="menu">
              <ul className="menu-nav">
                <li className="nav-item"><NavLink to="/" className="nav-link" exact activeClassName="active">Home</NavLink></li>
                <li className="nav-item"><NavLink to="/about" className="nav-link">About Me</NavLink></li>
                <li className="nav-item"><NavLink to="/work" className="nav-link">My Work</NavLink></li>
                <li className="nav-item"><NavLink to="/contact" className="nav-link">Contact Me</NavLink></li>
              </ul>
            </nav>
          )}
        <ReactResizeDetector handleWidth handleHeight onResize={this.onResize} targetDomEl={this.parentRef.current} />
      </>
    );
  }
}
