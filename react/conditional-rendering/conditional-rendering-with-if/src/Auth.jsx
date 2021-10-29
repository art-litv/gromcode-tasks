import React, { Component } from "react";

import Greeting from "./Greeting.jsx";
import Login from "./Login.jsx";
import Logout from "./Logout.jsx";

export default class Auth extends Component {
  state = {
    isLoggedIn: false,
  };

  switchSession = () => {
    this.setState((state) => ({ isLoggedIn: !state.isLoggedIn }));
  };

  render() {
    const { isLoggedIn } = this.state;
    return (
      <div className="auth">
        <Greeting isLoggedIn={isLoggedIn} />
        <div>
          {isLoggedIn ? (
            <Logout onLogout={this.switchSession} />
          ) : (
            <Login onLogin={this.switchSession} />
          )}
        </div>
      </div>
    );
  }
}
