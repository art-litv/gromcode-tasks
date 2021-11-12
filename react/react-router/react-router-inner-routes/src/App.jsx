import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import Home from "./Home.jsx";
import Products from "./Products.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <ul className="navigation">
        <li className="navigation__item">
          <Link to="/">Home</Link>
        </li>
        <li className="navigation__item">
          <Link to="/products">Products</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
      </Switch>
    </BrowserRouter>
  );
}
