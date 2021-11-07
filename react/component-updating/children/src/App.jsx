import React from 'react';

import Dialog from './Dialog.jsx';

export default class App extends React.Component {
  state = {
    isOpen: false,
  };

  switchDialog = isOpen => {
    this.setState({ isOpen });
  };

  render() {
    return (
      <div className="app">
        <button className="btn" onClick={() => this.switchDialog(true)}>
          Show dialog
        </button>
        <Dialog
          title="Recommendation"
          isOpen={this.state.isOpen}
          onClose={() => this.switchDialog(false)}
        >
          <p>Use immutable array methods to work with data. It will help to avoid bugs</p>
        </Dialog>
      </div>
    );
  }
}
