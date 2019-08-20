import React, {Component} from "react";
import ReactDOM from "react-dom";

import CountDisplay from "./CountDisplay";
import CounterButtons from "./CounterButtons";

class App extends Component {
    constructor() {
      super();
      this.state = {currentCount:1};
    }
    
    handleIncrement() {
      this.setState({currentCount: this.state.currentCount + 1});
    }

    handleDecrement() {
      this.setState({currentCount: this.state.currentCount - 1});
    }

    render() {
    return  (
      <div>
      <CountDisplay
      currentCount = {this.state.currentCount}  /> 
      <CounterButtons 
          onIncrement = {() => {this.handleIncrement() }}
          onDecrement = {() => {this.handleDecrement() }}
       />         
    </div>
    );
  }
}

export default App;