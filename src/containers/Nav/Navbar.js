import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import ButtonContainer from './Buttons/Button';
// import ButtonToggler from './Buttons/ButtonToggler';

const Navbar = () => (
  <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5" role="navigation">
    <div className="navbar-brand">
      <Link to="/">C[F]L</Link>
    </div>
  </NavWrapper>
);

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;

export default Navbar;
