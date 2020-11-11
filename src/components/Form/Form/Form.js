import React from 'react';

import './Form.css';

function Form({ handleSubmit, children }) {
  return (
    <form className="Form" onSubmit={handleSubmit}>
      {children}
    </form>
  );
}

export default Form;
