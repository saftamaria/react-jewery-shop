import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to='/'>Anto Jewery</NavLink>
        <NavIcon onClick={toggle}>
          <p>Catalog</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
