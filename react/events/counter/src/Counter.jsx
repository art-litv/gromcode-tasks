import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.decrease = this.decrease.bind(this);
  }

  increase = () =>
    this.setState({
      counter: this.state.counter + 1,
    });

  decrease() {
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
          className="counter__button"
          onClick={this.decrease}
        >
          -
        </button>
        <span className="counter__value" onClick={() => this.reset()}>
          {this.state.counter}
        </span>
        <button
          data-action="increase"
          className="counter__button"
          onClick={this.increase}
        >
          +
        </button>
      </div>
    );
  }
}
