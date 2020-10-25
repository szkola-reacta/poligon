import React from 'react';

import logoImg from './szkola-reacta-logo.png';

const styles = {
  width: 150,
  height: 'auto'
};

function Logo() {
  return (
    <div>
      <img src={logoImg} alt="Logo" style={styles} />
    </div>
  );
}

export default Logo;
