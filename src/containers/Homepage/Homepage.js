import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactResizeDetector from 'react-resize-detector';
import mapStoreToProps from '../../redux/mapStoreToProps';
import commonUtils from '../../components/lib/commonUtils';

export class Homepage extends Component {
  constructor(props) {
    super(props);
    this.commonUtils = commonUtils;
    this.parentRef = React.createRef();
    this.onResize = this.onResize.bind(this);
    this.state = { width: 100 };
  }

  componentDidMount() { this.commonUtils.setTitleAndScroll(''); }

  onResize(width) { this.setState({ width }); }

  render() {
    const { width } = this.state;
    return (
      <div className="page-content">
        {width >= 1004
          ? (
            <div>
              <h1>
                Rhayven Ayers
              </h1>
              <h2>
                Accessible Web Developer, Programmer &amp; Designer
              </h2>
              <div className="icons">
                <a href="https://twitter.com/codingforllamas" aria-label="Twitter Page">
                  <i className="fab fa-twitter fa-2x" />
                </a>
                <a href="https://www.facebook.com/codingforllamas" aria-label="Facebook Page">
                  <i className="fab fa-facebook fa-2x" />
                </a>
                <a href="https://www.linkedin.com/in/rhayvenayers" aria-label="LinkedIn Page">
                  <i className="fab fa-linkedin fa-2x" />
                </a>
                <a href="https://github.com/Unesdala" aria-label="Github Page">
                  <i className="fab fa-github fa-2x" />
                </a>
              </div>
            </div>
          )
          : (
            <div className="page-content">
              <p>
                Hello from Narrow Front Page.
              </p>
            </div>
          )}
        <ReactResizeDetector handleWidth handleHeight onResize={this.onResize} targetDomEl={this.parentRef.current} />
      </div>
    );
  }
}

Homepage.defaultProps = { homeContent: {} };
Homepage.propTypes = {
  homeContent: PropTypes.shape({
    title: PropTypes.string,
    comments: PropTypes.string,
  }),
};

export default connect(mapStoreToProps, null)(Homepage);
