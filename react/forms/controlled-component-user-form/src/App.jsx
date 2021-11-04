import React from 'react';

import UserForm from './UserForm.jsx';

export default class App extends React.Component {
  createUser = event => {
    event.preventDefault();
    console.log(
      [...new FormData(event.target)].reduce(
        (acc, [name, value]) => ({ ...acc, [name]: value }),
        {},
      ),
    );
  };

  render() {
    return <UserForm onSubmit={this.createUser} />;
  }
}
