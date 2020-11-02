import React, { useState, useRef } from 'react';

function useInput(initialValue = '') {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return [value, handleChange];
}

function Form() {
  const [name, handleNameChange] = useInput('');
  const [surname, handleSurnameChange] = useInput('');
  const [age, handleAgeChange] = useInput('');
  const surnameInput = useRef();

  const handleClick = () => console.log('React Button');
  const handleFocusClick = () => {
    surnameInput.current.focus();
    surnameInput.current.value = 'Kowalski';
    surnameInput.current.style.border = '#f00 1px solid';
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  // const handleChange = (event) => {
  //   // event.target.name
  //   // event.target.value
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   if (name === 'name') {
  //     setName(value);
  //   } else if (name === 'surname') {
  //     setSurname(value);
  //   } else if (name === 'age') {
  //     setAge(value);
  //   }
  // };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="text" name="name" placeholder="Name" onChange={handleNameChange} />
      </div>
      <div>
        <input type="text" ref={surnameInput} name="surname" placeholder="Surname" onChange={handleSurnameChange} />
      </div>
      <div>
        <input type="text" name="age" placeholder="Age" onChange={handleAgeChange} />
      </div>
      <button type="submit" onClick={handleClick}>Send</button>
      <button type="button" onClick={handleFocusClick}>Focus</button>
    </form>
  );
}

// class Form extends React.Component {
//   state = {
//     name: '',
//     surname: '',
//     age: ''
//   }
//   constructor(props) {
//     super(props);
//     this.surnameInput = React.createRef();
//   }
//   handleSubmit(event) {
//     event.preventDefault();
//   }
//   handleClick = (event) => {
//     console.log('handleClick: ', event);
//     console.log('React Button');
//   }
//   handleChange = (event) => {
//     // event.target.name
//     const keyName = event.target.name;
//     this.setState({ [keyName]: event.target.value });
//   }
//   handleFocusClick = () => {
//     this.surnameInput.current.focus();
//     this.surnameInput.current.value = 'Kowalski';
//     this.surnameInput.current.style.border = '#f00 1px solid';
//   }
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit.bind(this)}>
//         <div>
//           <input type="text" name="name" placeholder="Name" onChange={this.handleChange} />
//         </div>
//         <div>
//           <input type="text" ref={this.surnameInput} name="surname" placeholder="Surname" onChange={this.handleChange} />
//         </div>
//         <div>
//           <input type="text" name="age" placeholder="Age" onChange={this.handleChange} />
//         </div>
//         <button type="submit" onClick={this.handleClick}>Send</button>
//         <button type="button" onClick={this.handleFocusClick}>Focus</button>
//       </form>
//     );
//   }
// }

export default Form;
