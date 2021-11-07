import React from 'react';

import Numbers from './Numbers.jsx';
import EvenNumbers from './EvenNumbers.jsx';
import OddNumbers from './OddNumbers.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(
      () =>
        this.setState(({ number }) => ({
          number: number + 1,
        })),
      1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <>
        <Numbers number={this.state.number} />
        <EvenNumbers number={this.state.number} />
        <OddNumbers number={this.state.number} />
      </>
    );
  }
}
