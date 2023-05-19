import React, { Fragment } from 'react';

class MyComponent extends React.Component {
    state = {
      name: '',
      age: '',
    };
  
    handleOnChangeName = (event) => {
      this.setState({
        name: event.target.value,
      });
    };
  
    handleOnChangeAge = (event) => {
      this.setState({
        age: event.target.value,
      });
    };
  
    render() {
      return (
        <>
          <div className='name'>
            enter name:
            <input
              value={this.state.name}
              type='text'
              onChange={this.handleOnChangeName}
            />
            <br />
            My name's: {this.state.name}
          </div>
          <div className='age'>
            enter age:
            <input
              value={this.state.age}
              type='number'
              onChange={this.handleOnChangeAge}
            />
            <br />
            Age: {this.state.age}
          </div>
        </>
      );
    }
  }
  

export default MyComponent;
