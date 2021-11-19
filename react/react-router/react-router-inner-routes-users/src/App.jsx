import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import Home from "./Home.jsx";
import Users from "./Users.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <ul class="navigation">
        <li class="navigation__item">
          <Link to="/">Home</Link>
        </li>
        <li class="navigation__item">
          <Link to="/users">Users</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={Users} />
      </Switch>
    </BrowserRouter>
  );
}
