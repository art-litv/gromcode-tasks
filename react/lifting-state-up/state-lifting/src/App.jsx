import React from 'react';

import UserProfile from './UserProfile.jsx';
import UserMenu from './UserMenu.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null,
    };
  }

  componentDidMount() {
    this.fetchUser(this.props.userId);
  }

  fetchUser = userId => {
    fetch('https://api.github.com/users/' + userId)
      .then(userData => userData.json())
      .then(userData => this.setState({ userData }));
  };

  render() {
    if (!this.state.userData) return null;
    return (
      <div className="page">
        <header className="header">
          <UserMenu userData={this.state.userData} />
        </header>
        <UserProfile userData={this.state.userData} />
      </div>
    );
  }
}
