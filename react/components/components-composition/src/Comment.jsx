import React from "react";
import "./comments.scss";
import moment from "moment";

import UserInfo from "./UserInfo.jsx";

const formatDate = (date) => moment(date).format("DD MMM YYYY");

function Comment(props) {
  const { author, text, date } = props;
  return (
    <div className="comment">
      <UserInfo user={author} />
      <div className="comment__text">{text}</div>
      <div className="comment__date">{formatDate(date)}</div>
    </div>
  );
}

export default Comment;
