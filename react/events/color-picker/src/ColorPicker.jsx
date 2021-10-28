import React, { Component } from "react";

export default class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedColor: "",
    };
  }

  selectColor = (selectedColor) => {
    this.setState({ selectedColor });
  };

  cleanSelectedColor = () => {
    this.setState({ selectedColor: "" });
  };

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.selectedColor}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseEnter={() => this.selectColor("Coral")}
            onMouseLeave={this.cleanSelectedColor}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseEnter={() => this.selectColor("Aqua")}
            onMouseLeave={this.cleanSelectedColor}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseEnter={() => this.selectColor("Bisque")}
            onMouseLeave={this.cleanSelectedColor}
          ></button>
        </div>
      </div>
    );
  }
}
