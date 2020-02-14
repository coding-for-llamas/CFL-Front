import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import ButtonContainer from './Buttons/Button';
// import ButtonToggler from './Buttons/ButtonToggler';

const Navbar = () => (
  <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5" role="navigation">
    <div className="navbar-brand">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/about" className="nav-link">About Me</Link>
      <Link to="/work" className="nav-link">My Work</Link>
      <Link to="/contact" className="nav-link">Contact Me</Link>
    </div>
  </NavWrapper>
);

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
    text-align: left;
    position: relative;
    font-size: 30px;
    text-transform: uppercase;
    font-weight: 300;
    text-decoration: none;
    display: inline;
  }
`;

export default Navbar;
