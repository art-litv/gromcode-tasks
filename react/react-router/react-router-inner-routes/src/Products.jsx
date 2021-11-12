import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import Product from "./Product.jsx";

export default function Products() {
  return (
    <div class="page__content">
      <h1>Products</h1>
      <ul class="navigation">
        <li class="navigation__item">
          <Link to="/products/book">Book</Link>
        </li>
        <li class="navigation__item">
          <Link to="/products/ball">Ball</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/products">
          <span>Select a product please</span>
        </Route>
        <Route path="/products/:productId" component={Product} />
      </Switch>
    </div>
  );
}
