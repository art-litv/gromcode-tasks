import React from "react";
import ReactDOM from "react-dom";

const searchFormElem = (
  <>
    <h1>Search Form</h1>
    <div>
      <input type="text" />
      <button>Search</button>
    </div>
  </>
);

ReactDOM.render(searchFormElem, document.getElementById("root"));
