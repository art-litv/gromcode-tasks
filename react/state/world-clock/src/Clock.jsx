import React, { Component } from "react";
import "./clock.scss";

import moment from "moment";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.forceUpdate = this.forceUpdate.bind(this);
    setInterval(this.forceUpdate, 1000);
  }

  getTimeWithOffset = (offset) => {
    const currentTime = new Date();
    const utcOffset = currentTime.getTimezoneOffset() / 60;
    return new Date(
      currentTime.setHours(currentTime.getHours() + offset + utcOffset)
    );
  };

  getFormattedTime = (offset, format) => {
    const date = this.getTimeWithOffset(offset);
    return moment(date).format(format);
  };

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.props.location}</div>
        <div className="clock__time">
          {this.getFormattedTime(this.props.offset, "LTS")}
        </div>
      </div>
    );
  }
}

export default Clock;
