import React, { Component } from "react";

export default class LifyCycleInCBC extends Component {
  state = { count: 0 };

  componentDidMount() {
    console.log("Component Mounted");

    this.intervalID = setInterval(() => {
      console.log("API CALL");
    }, 2000);
  }

  componentDidUpdate() {
    console.log("Component Updated");
  }

  componentWillUnmount() {
    console.log("Component Unmounted");

    clearInterval(this.intervalID);
  }

  increment = () => this.setState({ count: this.state.count + 1 });

  render() {
    return (
      <div>
        <h1>LifyCycleInCBC </h1>
        <h2>Count = {this.state.count}</h2>
        <button onClick={this.increment}>update</button>
      </div>
    );
  }
}
