import React, { RefObject } from 'react';
import { withResizeDetector } from 'react-resize-detector';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

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
            <MobileMenu />
          ) : (
            <DesktopMenu />
          )}
      </div>
    );
  }
}

export default withResizeDetector(Navigation);