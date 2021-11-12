import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Home.jsx";
import Products from "./Products.jsx";
import Contacts from "./Contacts.jsx";
import PageNotFound from "./PageNotFound.jsx";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/contacts" component={Contacts} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
