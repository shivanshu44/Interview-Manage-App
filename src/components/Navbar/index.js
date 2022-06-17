import React from 'react';
import {Nav,NavLink,Bars,NavMenu} from './NavbarElement';

const Navbar = () => {
  return (
    <>
      <Nav>
          <NavLink to="/">
              <h1>Logo</h1>
          </NavLink>
          <Bars />
          <NavMenu>
              <NavLink to="/about" activestyle> About</NavLink>
              <NavLink to="/signup" activestyle> Sign-Up</NavLink>
              <NavLink to="/login" activestyle> Login</NavLink>
          </NavMenu>
      </Nav>
    </>
  );
}

export default Navbar;
