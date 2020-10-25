import React from 'react';

const styles = {
  marginBottom: 10
};

function Menu({ children }) {
  return (
    <nav style={styles}>
      { children }
    </nav>
  );
}

export default Menu;
