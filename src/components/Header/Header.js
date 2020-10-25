import React from 'react';

import Logo from './Logo';
import Menu from './Menu';
import NavLink from './NavLink';

function Header() {
  return (
    <div>
      <Logo />
      <Menu>
        <NavLink to="/" label="Link 1" />
        <NavLink to="/" label="Link 2" />
        <NavLink to="/" label="Link 3" />
        <NavLink to="/" label="Link 4" />
      </Menu>
    </div>
  );
}

export default Header;
