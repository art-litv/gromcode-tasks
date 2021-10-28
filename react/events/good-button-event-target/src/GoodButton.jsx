import React, { Component } from "react";

export default class GoodButton extends Component {
  alertTargetText = ({ target }) => {
    alert(target.textContent);
  };

  render() {
    return (
      <button className="fancy-button" onClick={this.alertTargetText}>
        Good button
      </button>
    );
  }
}
