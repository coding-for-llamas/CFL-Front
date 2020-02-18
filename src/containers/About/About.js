import React, { Component } from 'react';
import ReactResizeDetector from 'react-resize-detector';
import commonUtils from '../../components/lib/commonUtils';
import DefaultFooter from '../Footer/Footer';
import portrait from '../../../static/img/portrait.jpg';

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
            <div id="about">
              <h1 className="lg-heading">
                About
                <span className="text-secondary">Me</span>
              </h1>

              <h2 className="sm-heading">
                A bit about the developer.
              </h2>

              <div className="about-info">
                <img src={portrait} alt="Web Developer Portrait" className="bio-image" />
                <div className="bio" role="main" aria-labelledby="About Main">
                  <h3 className="text-secondary">Bio</h3>
                  <p>
                    I have been interested in the tech field since I was a child, taking apart and rebuilding electronic
                    toys that my father would bring home, fascinated with how they worked.
                  </p>
                  <p>
                    {' '}
                    My true passion really took off back in the early days of Neopets, though. I wanted to be able to
                    customize my user lookup, so I started dabbling with simple HTML and CSS with the help of their
                    personal guides.
                  </p>
                  <p>
                    In later years, I expanded to myspace (customizing my user page) and began to build static sites.
                    Most of the sites I put together were simple in nature, but I found the process of it all
                    fascinating.
                  </p>
                  <p>
                    Since then, I&apos;ve gone to community college to obtain my Career Service Certificate in web
                    programming, and I have taken a vested interest in learning as much as I can. My main focus is on
                    accessibility in web development - it is my belief
                    that accessible web design can both look and run just as well as traditionaly programmed websites
                    when accessibility is considered from the beginning.
                  </p>

                  <p>The internet should be accessible to all and with a little forethought, that is achievable!</p>
                </div>

                <div className="about about-1">
                  <h3 role="main" aria-labelledby="About 1"><u>Proficient In</u></h3>
                  <p>
                    HTML5
                    <br />
                    CSS3
                    <br />
                    JavaScript
                    <br />
                    WordPress
                  </p>
                </div>
                <div className="about about-2">
                  <h3 role="main" aria-labelledby="About 2"><u>Comfortable In</u></h3>
                  <p>
                    Accessible Web Design
                    <br />
                    Bootstrap
                    <br />
                    Mobile Friendly Web Design
                    <br />
                    MySQL
                    <br />
                    <abbr title="Photoshop Data file (extension)">PSD</abbr>
                    {' '}
                    to HTML/CSS
                    <br />
                    <abbr title="Hypertext Preprocessor">PHP</abbr>
                    <br />
                    Node.JS
                    <br />
                    React
                    <br />
                    <abbr title="JavaScript XML">JSX</abbr>
                  </p>
                </div>
                <div className="about about-3">
                  <h3 role="main" aria-labelledby="About 3"><u>Learning</u></h3>
                  <p>
                    MongoDB
                    <br />
                    Express
                  </p>
                </div>
              </div>
              <DefaultFooter />

            </div>
          )
          : (
            <div className="page-content">
              <p>
                Hello from Narrow About Page.
              </p>
            </div>
          )}
        <ReactResizeDetector handleWidth handleHeight onResize={this.onResize} targetDomEl={this.parentRef.current} />
      </div>
    );
  }
}

export default About;
