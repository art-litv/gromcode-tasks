import React, { Component } from "react";

import Message from "./Message.jsx";

export default class Page extends Component {
  state = {
    text: "",
  };

  render() {
    return (
      <>
        <Message text={this.state.text} />
        <button
          className="btn"
          onClick={() => this.setState({ text: "Hello, world!" })}
        >
          Text1
        </button>
        <button
          className="btn"
          onClick={() => this.setState({ text: "Another exciting text." })}
        >
          Text2
        </button>
        <button className="btn" onClick={() => this.setState({ text: "" })}>
          Clear
        </button>
      </>
    );
  }
}
