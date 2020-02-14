import React from 'react';
import { Link } from 'react-router-dom';
// import ButtonContainer from './Buttons/Button';
// import ButtonToggler from './Buttons/ButtonToggler';

const Navbar = () => (
  <nav className="menu">
    <div className="menu-branding">
      <div className="portrait" role="img" aria-label="Small Web Developer Portrait" />
    </div>
    <div className="menu-nav">
      <Link to="/" className="nav-item"><div className="nav-link">Home</div></Link>
      <Link to="/about" className="nav-item"><div className="nav-link">About Me</div></Link>
      <Link to="/work" className="nav-item"><div className="nav-link">My Work</div></Link>
      <Link to="/contact" className="nav-item"><div className="nav-link">Contact Me</div></Link>
    </div>
  </nav>
);

export default Navbar;
