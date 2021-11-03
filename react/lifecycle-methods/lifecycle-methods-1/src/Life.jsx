import React from 'react';

export default class Life extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: 0,
    };
    console.log('constructor: good place to create state');
  }

  componentDidMount() {
    console.log('componentDidMount: API calls, subscriptions');
    this.setState({ state: 1 });
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate(nextProps, nextState): decide to render or not to render');
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate(prevProps, prevState): some updates based on new props');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount(): cleanup before DOM related to component will be removed');
  }

  render() {
    console.log('return React element to build DOM');
    return null;
  }
}
