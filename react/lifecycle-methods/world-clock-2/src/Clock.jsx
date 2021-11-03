import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ date: new Date() }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { location, offset } = this.props;
    return (
      <div className="clock">
        <div className="clock__location">{location}</div>
        <div className="clock__time">{this.state.date.toLocaleTimeString()}</div>
      </div>
    );
  }
}
