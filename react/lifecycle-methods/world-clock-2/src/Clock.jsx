import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: this.getTimeWithOffset(this.props.offset),
    };
  }

  componentDidMount() {
    this.interval = setInterval(
      () =>
        this.setState(() => ({
          date: this.getTimeWithOffset(this.props.offset),
        })),
      1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getTimeWithOffset = offset => {
    const currentTime = new Date();
    const utcOffset = currentTime.getTimezoneOffset() / 60;
    return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
  };

  render() {
    const { location } = this.props;
    return (
      <div className="clock">
        <div className="clock__location">{location}</div>
        <div className="clock__time">{this.state.date.toLocaleTimeString()}</div>
      </div>
    );
  }
}
