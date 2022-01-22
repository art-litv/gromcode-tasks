import React from "react";
import { Provider } from "react-redux";

import store from "./store";

import UsersList from "./components/UsersList";

export default function App() {
  return (
    <Provider store={store}>
      <UsersList />
    </Provider>
  );
}
