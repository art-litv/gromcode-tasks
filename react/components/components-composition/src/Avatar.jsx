import React from "react";

function Avatar(props) {
  const { avatarUrl, name } = props;
  console.log(avatarUrl);
  return <img className="avatar" src={avatarUrl} alt={name} />;
}

export default Avatar;
