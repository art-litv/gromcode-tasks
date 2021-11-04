import React from 'react';

import User from './User.jsx';
import Filter from './Filter.jsx';

export default class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      count: props.users.length,
    };
  }

  onChange = ({ target }) => {
    const filterText = target.value;
    const count = this.getFilteredUsers(filterText).length;
    this.setState({ filterText, count });
  };

  getFilteredUsers = matchName => {
    return this.props.users.filter(({ name }) => name.includes(matchName));
  };

  render() {
    const { filterText } = this.state;
    const users = filterText.length ? this.getFilteredUsers(filterText) : this.props.users;
    return (
      <>
        <Filter onChange={this.onChange} {...this.state} />
        <ul className="users">
          {users.map(({ id, ...userData }) => (
            <User key={id} {...userData} />
          ))}
        </ul>
      </>
    );
  }
}
