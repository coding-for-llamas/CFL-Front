import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ReactResizeDetector from 'react-resize-detector';
import DefaultCollapsableNav from './CollapsableNav';

interface NavigationState {
  width: number;
}

export default class Navigation extends Component<Record<string, unknown>, NavigationState> {
  parentRef: any;

  constructor(props: Record<string, unknown>) {
    super(props);
    this.parentRef = React.createRef();
    this.onResize = this.onResize.bind(this);
    this.state = { width: 320 };
  }

  onResize(width: any): void {
    this.setState({ width });
  }

  render(): JSX.Element {
    const { width } = this.state;
    return (
      <>
        {width <= 768
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
