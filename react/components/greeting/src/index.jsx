import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import Greeting from "./Greeting.jsx";

ReactDOM.render(
  <Greeting
    firstName="John"
    lastName="Doe"
    birthDate={new Date("01.01.2004")}
  />,
  document.getElementById("root")
);
