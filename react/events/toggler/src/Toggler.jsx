import React, { Component } from "react";

export default class Toggler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggled: false,
    };
  }

  toggle = () => {
    this.setState((state) => ({
      isToggled: !state.isToggled,
    }));
  };

  render() {
    return (
      <button className="toggler" onClick={this.toggle}>
        {this.isToggled ? "On" : "Off"}
      </button>
    );
  }
}
