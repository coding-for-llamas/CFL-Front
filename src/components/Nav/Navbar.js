import React from 'react';
import { NavLink } from 'react-router-dom';
// import ButtonContainer from './Buttons/Button';
// import ButtonToggler from './Buttons/ButtonToggler';

const Navbar = () => (
  <nav className="menu">
    <div className="menu-branding">
      <div className="portrait" role="img" aria-label="Small Web Developer Portrait" />
    </div>
    <ul className="menu-nav">
      <li className="nav-item"><NavLink to="/" className="nav-link" exact activeClassName="active">Home</NavLink></li>
      <li className="nav-item"><NavLink to="/about" className="nav-link">About Me</NavLink></li>
      <li className="nav-item"><NavLink to="/work" className="nav-link">My Work</NavLink></li>
      <li className="nav-item"><NavLink to="/contact" className="nav-link">Contact Me</NavLink></li>
    </ul>
  </nav>
);

export default Navbar;
