import React from 'react';

import Numbers from './Numbers.jsx';

export default class OddNumbers extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.number % 2 !== 0;
  }

  render() {
    return <Numbers title={this.props.title} number={this.props.number} />;
  }
}
