import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from './szkola-reacta-logo.png';

const styles = {
  width: 150,
  height: 'auto'
};

function Logo() {
  return (
    <div>
      <Link to="/">
        <img src={logoImg} alt="Logo" style={styles} />
      </Link>
    </div>
  );
}

export default Logo;
