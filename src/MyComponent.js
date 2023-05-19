import React, { Fragment } from 'react';

class MyComponent extends React.Component {
    state = {
        name: '',
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    render() {
        return (
            <>
                <div className='FirstName'>
                  enter name:   <input
                        value={this.state.name}
                        type='text'
                        onChange={this.handleOnChangeName}
                    /><br/>
                    My name is {this.state.name}
                </div>
                <div></div>
            </>
        );
    }
}


export default MyComponent;
