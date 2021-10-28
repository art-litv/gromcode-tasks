import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.decreaseCounter = this.decreaseCounter.bind(this);
  }

  increaseCounter = () =>
    this.setState({
      counter: this.state.counter + 1,
    });

  decreaseCounter() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }

  reset() {
    this.setState({ counter: 0 });
  }

  render() {
    return (
      <div class="counter">
        <button
          data-action="decrease"
          class="counter__button"
          onClick={this.decreaseCounter}
        >
          -
        </button>
        <span class="counter__value" onClick={() => this.reset()}>
          {this.state.counter}
        </span>
        <button
          data-action="increase"
          class="counter__button"
          onClick={this.increaseCounter}
        >
          +
        </button>
      </div>
    );
  }
}
