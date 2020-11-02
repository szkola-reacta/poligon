import React from 'react';

function Form() {
  const handleClick = () => console.log('React Button');
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <button onClick={handleClick}>React Button</button>
    </form>
  );
}

export default Form;
