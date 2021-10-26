import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";

import Comment from "./Comment.jsx";

const author = {
  name: "Tom",
  avatarUrl: "https://avatars.githubusercontent.com/github",
};

ReactDOM.render(
  <Comment
    author={author}
    text="Good job!"
    date={new Date("2019-01-01T11:32:19.566Z")}
  />,
  document.getElementById("root")
);
