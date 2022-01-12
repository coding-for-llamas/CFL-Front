import React, { RefObject } from 'react';
import { withResizeDetector } from 'react-resize-detector';
import CommonUtils from '../../lib/commonUtils';

interface HomepageProps {
  targetRef: RefObject<HTMLDivElement>;
  width: number;
  height: number;
}
export class Homepage extends React.Component<HomepageProps, unknown> {
  commonUtils = CommonUtils;

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props:HomepageProps) { super(props); }

  componentDidMount():void { this.commonUtils.setTitleAndScroll('', window.screen.width); }
  
  render(): JSX.Element {
    const { targetRef } = this.props;
    return (
      <div ref={targetRef} className="Site-content">
        <main>
          <h1>Test</h1>
        </main>
      </div>
    );
  }
}

export default withResizeDetector(Homepage);
