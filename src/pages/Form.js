import React, { useState, useRef } from 'react';

function useInput(initialValue = '') {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return [value, handleChange];
}

function Form() {
  const [name, handleNameChange] = useInput('Patryk');
  const [surname, handleSurnameChange] = useInput('Omiotek');
  const [age, handleAgeChange] = useInput('35');
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

  return (
    <div>
      <div>
        <div>Name: {name}</div>
        <div>Surname: {surname}</div>
        <div>Age: {age}</div>
      </div>
      <form className="Form" onSubmit={handleSubmit}>
        <div className="Form__group">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="Form__group">
          <input
            type="text"
            ref={surnameInput}
            name="surname"
            placeholder="Surname"
            defaultValue={surname}
            onChange={handleSurnameChange}
          />
        </div>
        <div className="Form__group">
          <input
            type="text"
            name="age"
            placeholder="Age"
            value={age}
            onChange={handleAgeChange}
          />
        </div>
        <div className="Form__group">
          <button type="submit" onClick={handleClick}>Send</button>
          <button type="button" onClick={handleFocusClick}>Focus</button>
        </div>
      </form>
    </div>
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
