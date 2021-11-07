import React from 'react';

import Numbers from './Numbers.jsx';
import EvenNumbers from './EvenNumbers.jsx';
import OddNumbers from './OddNumbers.jsx';

export default class App extends React.Component {
  state = {
    number: 0,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(({ number }) => ({
        number: number + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const staticNumber = 17;
    return (
      <div className="app">
        <OddNumbers title="Odd number" number={this.state.number} />
        <EvenNumbers title="Even number" number={this.state.number} />
        <Numbers title="All numbers" number={this.state.number} />
        <Numbers title={`Just ${staticNumber}`} number={staticNumber} />
      </div>
    );
  }
}
