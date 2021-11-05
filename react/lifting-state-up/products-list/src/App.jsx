import React from 'react';

import ShoppingCart from './ShoppingCart.jsx';
import Profile from './Profile.jsx';

export default class App extends React.Component {
  state = {
    userData: { firstName: 'John', lastName: 'Doe', age: 17 },
  };

  handleChange = ({ target }) => {
    this.setState({
      userData: Object.assign(this.state.userData, { [target.name]: target.value }),
    });
  };

  render() {
    const userData = this.state.userData;
    return (
      <div className="page">
        <h1 className="title">
          Hello, {userData.firstName} {userData.lastName}
        </h1>
        <main className="content">
          <ShoppingCart userName={userData.firstName} />
          <Profile userData={userData} handleChange={this.handleChange} />
        </main>
      </div>
    );
  }
}
