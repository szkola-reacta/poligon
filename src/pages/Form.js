import React from 'react';

class Form extends React.Component {
  state = {
    name: ''
  }
  // constructor(props) {
  //   super(props);
  //   // this.handleChange = this.handleChange.bind(this);
  //   // this.handleClick = this.handleClick.bind(this);
  //   // this.handleSubmit = this.handleSubmit.bind(this);
  // }
  handleSubmit(event) {
    event.preventDefault();
  }
  handleClick = (event) => {
    console.log('handleClick: ', event);
    console.log('React Button');
  }
  handleChange = (event) => {
    // event.target.value
    console.log('input value: ', event.target.value);
    this.setState({ name: event.target.value });
    console.log('this: ', this);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" onChange={this.handleChange} />
        <button onClick={this.handleClick}>React Button</button>
      </form>
    );
  }
}

// function Form() {
//   const handleClick = () => console.log('React Button');
//   const handleSubmit = (event) => {
//     event.preventDefault();
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <button onClick={handleClick}>React Button</button>
//     </form>
//   );
// }

export default Form;
