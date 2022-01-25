import React from "react";
import { Provider } from "react-redux";

import store from "./store";

import UsersList from "./users/UsersList";

export default function App() {
  return (
    <Provider store={store}>
      <UsersList />
    </Provider>
  );
}
