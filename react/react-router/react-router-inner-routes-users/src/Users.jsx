import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import User from "./User.jsx";

export default function Users() {
  return (
    <div class="page__content">
      <h1>Users</h1>
      <ul class="navigation">
        <li class="navigation__item">
          <Link to="/users/github">Github</Link>
        </li>
        <li class="navigation__item">
          <Link to="/users/facebook">Facebook</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/users">
          <span>Select a user please</span>
        </Route>
        <Route path="/users/:userId" component={User} />
      </Switch>
    </div>
  );
}
