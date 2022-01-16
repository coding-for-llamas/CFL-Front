import React, { RefObject } from 'react';
import { NavLink } from 'react-router-dom';
import { withResizeDetector } from 'react-resize-detector';

interface NavigationProps {
  targetRef: RefObject<HTMLDivElement>;
  width: number;
}

export class Navigation extends React.Component<NavigationProps> {

  render(): JSX.Element {
    const { width, targetRef } = this.props;
    return (
      <div ref={targetRef} className="navigation">
        {width <= 800
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
      </div>
    );
  }
}

export default withResizeDetector(Navigation);