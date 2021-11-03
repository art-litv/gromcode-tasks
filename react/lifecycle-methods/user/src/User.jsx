import React from 'react';

class User extends React.Component {
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

    const { avatar_url: avatarUrl, name, location } = this.state.user;
    return (
      <div className="user">
        <img alt="User Avatar" src={avatarUrl} className="user__avatar" />
        <div className="user__info">
          <span className="user__name">{name}</span>
          <span className="user__location">{location}</span>
        </div>
      </div>
    );
  }
}

export default User;
