import React from "react";
import { Provider } from "react-redux";

import store from "./store";

import TransferList from "./options/TransferList";

export default function App() {
  return (
    <Provider store={store}>
      <TransferList />
    </Provider>
  );
}
