import React, { Component } from "react";

import Login from "./Login.jsx";
import Logout from "./Logout.jsx";
import Spinner from "./Spinner.jsx";

export default class Auth extends Component {
  state = {
    isLoggedIn: false,
    isLogging: false,
  };

  onLogout = () => {
    this.setState({ isLoggedIn: false });
  };

  onLogin = () => {
    setTimeout(
      () => this.setState({ isLoggedIn: true, isLogging: false }),
      2000
    );
    this.setState({ isLogging: true });
  };

  render() {
    const { isLoggedIn, isLogging } = this.state;
    return (
      <div className="auth">
        <div>
          {isLoggedIn ? (
            <Logout onLogout={this.onLogout} />
          ) : isLogging ? (
            <Spinner size="50px" />
          ) : (
            <Login onLogin={this.onLogin} />
          )}
        </div>
      </div>
    );
  }
}
