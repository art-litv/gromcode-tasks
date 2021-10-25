import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const rootElement = document.querySelector("#root");

const greetingElem = (
  <div className="greeting">
    <h1 className="greeting__title">Hello, world!</h1>
    <p className="greeting_text">I'm learning React</p>
  </div>
);

ReactDOM.render(greetingElem, rootElement);
