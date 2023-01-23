import React from "react";

class ClassCounter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count2: 0
        }
        this.Increment = this.Increment.bind(this);
        this.Decrement = this.Decrement.bind(this);
    }
    
    Increment () {
        this.setState({count2: this.state.count2 + 1}) 
    };
    Decrement () {
        this.setState({count2: this.state.count2 - 1})
    };

   render () {
    return (
        <div>
            <h1>{this.state.count2}</h1>
            <button onClick={this.Increment}>Increment</button>
            <button onClick={this.Decrement}>Decrement</button>
        </div>
    )
   } 
}

export default ClassCounter;