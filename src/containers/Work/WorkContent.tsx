import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import menuItems, { MenuItem } from './menuItems';
import menuUtils from './menuUtils';

export class WorkContent extends React.Component<RouteComponentProps> {
  menuUtils: typeof menuUtils;

  menus: MenuItem[];

  constructor(props: RouteComponentProps) {
    super(props);
    this.menus = menuItems;
    this.menuUtils = menuUtils;
    this.navLinks = this.navLinks.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  makeMenuLink(menu: MenuItem, index: number): JSX.Element {
    return (
      // May need to add back Link to after adding back the buttons
      <div key={index} className={menu.projectType}>
        <a href={menu.link[0]} className="nav__link">
          <img src={menu.imgLink} alt={menu.altCode} />
        </a>
        {/* <Link to={menu.link[0]} className={menu.btnType[0]} aria-label={menu.ariaLabel[0]}>
          <i className={menu.iconClass[0]} />
            &nbsp;
          {menu.name[0]}
        </Link>
        <a href={menu.link[1]} className={menu.btnType[1]} aria-label={menu.ariaLabel[1]} target="_blank" rel="noreferrer">
          <i className={menu.iconClass[1]} />
            &nbsp;
          {menu.name[1]}
        </a> */}
      </div>
    );
  }

  navLinks(): JSX.Element {
    return (
      <div className="item">
        {this.menus.map((menu, index) => (this.menuUtils.menuItem(menu, index, this)))}
      </div>
    );
  }

  projects(): JSX.Element {
    return (
      <div className="projects">
        {this.navLinks()}
      </div>
    );
  }

  render(): JSX.Element {
    return (
      <div className="container">
        <main className="work-main">
          <h1 className="lg-heading">
            My
            {' '}
            <span className="text-secondary">Work</span>
          </h1>

          <h2 className="sm-heading">
            Some of the projects I&apos;ve worked on.
          </h2>

          {this.projects()}
        </main>
      </div>
    );
  }
}

export default withRouter(WorkContent);
