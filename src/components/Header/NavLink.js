import React from 'react';

function NavLink({ to, label }) {
  return <a href={to}>{label}</a>;
}

export default NavLink;
