import React from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
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
      <div key={index} className={menu.projectType}>
        <Link to={menu.link} className="nav__link">
          <img src={menu.imgLink} alt={menu.altCode} />
        </Link>
        <Link to={menu.link} className={menu.btnType} aria-label={menu.ariaLabel}>
          <i className={menu.iconClass} />
            &nbsp;
          {menu.name}
        </Link>
        <Link to={menu.link2} className={menu.btnType2} aria-label={menu.ariaLabel} target="_blank" rel="noreferrer">
          <i className={menu.iconClass} />
            &nbsp;
          {menu.name2}
        </Link>
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
