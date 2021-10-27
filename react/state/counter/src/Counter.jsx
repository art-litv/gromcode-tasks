import React, { Component } from "react";
import './counter.scss';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.start,
    };
    this.incrementCounter = this.incrementCounter.bind(this);
    setInterval(this.incrementCounter, props.interval);
  }

  incrementCounter() {
    this.setState(({ value: prevValue }) => ({ value: prevValue + 1 }));
  }

  render() {
    return <div className="counter">{this.state.value}</div>;
  }
}

export default Counter;
