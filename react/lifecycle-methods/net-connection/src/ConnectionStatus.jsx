import React from 'react';

export default class ConnectionStatus extends React.Component {
  state = {
    online: true,
  };

  componentDidMount() {
    window.addEventListener('online', () => this.setStatus(true));
    window.addEventListener('offline', () => this.setStatus(false));
  }

  componentWillUnmount() {
    window.removeEventListener('online', () => this.setStatus(true));
    window.removeEventListener('offline', () => this.setStatus(false));
  }

  setStatus(isOnline) {
    this.setState({ online: isOnline });
  }

  render() {
    const statusText = this.state.online ? 'Online' : 'Offline';
    const statusStyles = 'status' + (this.state.online ? '' : ' status_offline');
    return <div className={statusStyles}>{statusText}</div>;
  }
}
