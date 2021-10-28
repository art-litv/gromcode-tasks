import React, { Component } from "react";

export default class Colors extends Component {
  colors = {
    RED: "#f00",
    GREEN: "#0f0",
    BLUE: "#00f",
  };

  changeBodyColor(color) {
    document.body.style.backgroundColor = color;
  }

  render() {
    return (
      <div class="colors">
        <button
          className="colors__button"
          style={{ backgroundColor: this.colors.RED }}
          onClick={this.changeBodyColor.bind(this, this.colors.RED)}
        ></button>
        <button
          className="colors__button"
          style={{ backgroundColor: this.colors.GREEN }}
          onClick={this.changeBodyColor.bind(this, this.colors.GREEN)}
        ></button>
        <button
          className="colors__button"
          style={{ backgroundColor: this.colors.BLUE }}
          onClick={this.changeBodyColor.bind(this, this.colors.BLUE)}
        ></button>
      </div>
    );
  }
}
