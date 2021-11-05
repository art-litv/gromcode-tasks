import React from 'react';

import UserProfile from './UserProfile.jsx';
import UserMenu from './UserMenu.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    this.fetchUser(this.props.userId);
  }

  fetchUser = userId => {
    fetch('https://api.github.com/users/' + userId)
      .then(user => user.json())
      .then(user => this.setState({ user }));
  };

  render() {
    if (!this.state.user) return null;
    return (
      <div className="page">
        <header className="header">
          <UserMenu userData={this.state.user} />
        </header>
        <UserProfile userData={this.state.user} />
      </div>
    );
  }
}
