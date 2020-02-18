import React, { Component } from 'react';
import ReactResizeDetector from 'react-resize-detector';
import commonUtils from '../../components/lib/commonUtils';
import DefaultWideHome from './WideHome';

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
            <DefaultWideHome />
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

export default Homepage;
