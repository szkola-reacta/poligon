import React from 'react';

import Logo from './Logo';
import NavLink from './NavLink';

function Header() {
  return (
    <div>
      <Logo />
      <div>
        <NavLink to="/" label="Link 1" />
        <NavLink to="/" label="Link 2" />
        <NavLink to="/" label="Link 3" />
      </div>
    </div>
  );
}

export default Header;
