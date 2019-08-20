import React, {Component} from "react";
import ReactDOM from "react-dom";

class CounterButtons extends Component {
    render() {
    return (
    <div>
        <button onClick = {this.props.onIncrement } >
            +
        </button>
        <button onClick = {this.props.onDecrement } >
        -
        </button>
    </div>       
 ); 
}
}


export default CounterButtons;