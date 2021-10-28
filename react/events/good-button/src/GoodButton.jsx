import React, { Component } from "react";

export default class GoodButton extends Component {
  render() {
    return (
      <button className="fancy-button" onClick={() => alert("Good job!")}>
        Good button
      </button>
    );
  }
}
