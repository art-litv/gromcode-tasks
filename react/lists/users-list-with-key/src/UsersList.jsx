import React, { Component } from 'react';

import User from './User.jsx';

export default class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortType: null, // 'asc' | 'desc'
    };
  }

  switchSortType = () => {
    this.setState(({ sortType: prevSortType }) => ({
      sortType: prevSortType === 'asc' ? 'desc' : 'asc',
    }));
  };

  sortUsers = (users, type) => {
    const sortTypes = {
      asc: (u1, u2) => u1.age - u2.age,
      desc: (u1, u2) => u2.age - u1.age,
    };

    return users.sort(sortTypes[type]);
  };

  render() {
    let users = this.props.users.slice();
    const sortType = this.state.sortType;
    users = sortType ? this.sortUsers(users, sortType) : users;

    return (
      <div>
        <button className="btn" onClick={this.switchSortType}>
          {sortType ? sortType : '-'}
        </button>
        <ul className="users">
          {users.map(({ id, name, age }) => (
            <User key={id} name={name} age={age} />
          ))}
        </ul>
      </div>
    );
  }
}
