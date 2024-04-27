// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  decrement = () => {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  };

  reset = () => {
    this.setState({
      count: 0
    });
  };

  render() {
    const { count } = this.state;

    return (
      <div className="App">
        <h1>Counter App</h1>
        <div className="counter">{count}</div>
        <div className="buttons">
          <button onClick={this.increment}>Increase</button>
          <button onClick={this.decrement}>Decrease</button>
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}

export default App;
