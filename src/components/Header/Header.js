import React from 'react';

import {
  Link
} from 'react-router-dom';

import Logo from './Logo';
import Menu from './Menu';
// import NavLink from './NavLink';

function Header() {
  return (
    <div>
      <Logo />
      <Menu>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/articles">Articles</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </Menu>
    </div>
  );
}

export default Header;
