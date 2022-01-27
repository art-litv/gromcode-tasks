import React from "react";
import { Provider } from "react-redux";

import store from "./store";

import Weather from "./weather/Weather";

export default function App() {
  return (
    <Provider store={store}>
      <Weather />
    </Provider>
  );
}
