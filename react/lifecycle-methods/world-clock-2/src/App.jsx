import React from 'react';

import Clock from './Clock.jsx';

export default class App extends React.Component {
  state = {
    hidden: false,
  };

  toggle = () => {
    this.setState(({ hidden: prevHidden }) => ({ hidden: !prevHidden }));
  };

  render() {
    return (
      <>
        <button className="btn" onClick={this.toggle}>
          {this.state.hidden ? 'show' : 'hide'}
        </button>
        {!this.state.hidden && (
          <>
            <Clock location="London" offset={0} />
            <Clock location="Kyiv" offset={2} />
            <Clock location="New York" offset={-5} />
          </>
        )}
      </>
    );
  }
}
