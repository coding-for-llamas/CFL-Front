import React, { useState } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink,
} from 'reactstrap';

const CollapsableNav = (): JSX.Element => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar dark>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav>
            <NavItem><NavLink to="/" exact activeClassName="active" tag={RRNavLink} onClick={toggleNavbar}>Home</NavLink></NavItem>
            <NavItem><NavLink to="/about" tag={RRNavLink} onClick={toggleNavbar}>About Me</NavLink></NavItem>
            <NavItem><NavLink to="/work" tag={RRNavLink} onClick={toggleNavbar}>My Work</NavLink></NavItem>
            <NavItem><NavLink to="/contact" tag={RRNavLink} onClick={toggleNavbar}>Contact Me</NavLink></NavItem>
            {/* <NavItem>
              <NavLink
                to="https://dl.dropboxusercontent.com/s/y47jfwxu6lytoas/Rhayven_Ayers_Resume.pdf?dl=0"
                tag={RRNavLink}
                onClick={toggleNavbar}
              >
                Resume
              </NavLink>
            </NavItem> */}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default CollapsableNav;
