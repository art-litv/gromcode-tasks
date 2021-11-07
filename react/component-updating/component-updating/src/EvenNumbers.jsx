import React from 'react';

import Numbers from './Numbers.jsx';

export default class EvenNumbers extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.number % 2 === 0;
  }

  render() {
    return <Numbers title="Even number" number={this.props.number} />;
  }
}
