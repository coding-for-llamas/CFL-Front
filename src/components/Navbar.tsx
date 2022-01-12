import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ReactResizeDetector from 'react-resize-detector';

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
      <div className="navigation">
        {width <= 768
          ? (
            <h1>No</h1>
          ) : (
            <nav className="menu">
              <ul className="menu-nav">
                <li className="nav-item"><NavLink to="/" className="nav-link" exact activeClassName="active">Home</NavLink></li>
                <li className="nav-item"><NavLink to="/about" className="nav-link">About Me</NavLink></li>
                <li className="nav-item"><NavLink to="/work" className="nav-link">My Work</NavLink></li>
                <li className="nav-item"><NavLink to="/contact" className="nav-link">Contact Me</NavLink></li>
                <li className="nav-item">
                  <a
                    href="https://dl.dropboxusercontent.com/s/y47jfwxu6lytoas/Rhayven_Ayers_Resume.pdf?dl=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
          )}
        <ReactResizeDetector handleWidth handleHeight onResize={this.onResize} targetDomEl={this.parentRef.current} />
      </div>
    );
  }
}
