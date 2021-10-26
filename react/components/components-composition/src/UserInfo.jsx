import React from "react";

import Avatar from "./Avatar.jsx";

function UserInfo(props) {
  const { name, avatarUrl } = props.user;
  return (
    <div className="user-info">
      <Avatar name={name} avatarUrl={avatarUrl} />
      <div className="user-info__name">{props.user.name}</div>
    </div>
  );
}

export default UserInfo;
