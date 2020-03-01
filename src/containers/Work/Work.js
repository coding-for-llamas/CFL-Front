import React, { Component } from 'react';
import ReactResizeDetector from 'react-resize-detector';
import commonUtils from '../../components/lib/commonUtils';
import project1 from '../../../static/img/projects/project1.png';

export class About extends Component {
  constructor(props) {
    super(props);
    this.commonUtils = commonUtils;
    this.parentRef = React.createRef();
    this.onResize = this.onResize.bind(this);
    this.state = { width: 100 };
  }

  onResize(width) { this.setState({ width }); }

  render() {
    const { width } = this.state;
    return (
      <div className="page-content">
        {width >= 1004
          ? (
            <main id="work">
              <h1 className="lg-heading">
                My
                {' '}
                <span className="text-secondary">Work</span>
              </h1>

              <h2 className="sm-heading">
                Some of the projects I&apos;ve worked on.
              </h2>

              <div className="projects">
                <div className="item">
                  <a href="/daycare">
                    <img src={project1} alt="Screenshot of a daycare website" />
                  </a>
                  <a href="/daycare" className="btn-light" aria-label="Link to Caring Child Daycare">
                    <i className="fas fa-eye" />
                    {' '}
                    Caring Child Daycare
                  </a>
                </div>
              </div>

            </main>
          )
          : (
            <div className="page-content">
              <p>
                Hello from Narrow Work Page.
              </p>
            </div>
          )}
        <ReactResizeDetector handleWidth handleHeight onResize={this.onResize} targetDomEl={this.parentRef.current} />
      </div>
    );
  }
}

export default About;
