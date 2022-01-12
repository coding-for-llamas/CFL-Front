import React, { RefObject } from 'react';
import { withResizeDetector } from 'react-resize-detector';
import CommonUtils from '../../lib/commonUtils';

interface ContactProps {
  targetRef: RefObject<HTMLDivElement>;
  width: number;
  height: number;
}
export class Contact extends React.Component<ContactProps, unknown> {
  commonUtils = CommonUtils;

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props:ContactProps) { super(props); }

  componentDidMount():void { this.commonUtils.setTitleAndScroll('', window.screen.width); }
  
  render(): JSX.Element {
    const { targetRef } = this.props;
    return (
      <div ref={targetRef} className="Site-content">
        <h1>Contact</h1>
      </div>
    );
  }
}

export default withResizeDetector(Contact);
