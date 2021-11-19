import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function User() {
  const [userData, setUserData] = useState({});
  const { userId } = useParams();

  useEffect(() => {
    fetch("https://api.github.com/users/" + userId)
      .then((response) => response.json())
      .then(({ avatar_url: avatarUrl, name, location }) => {
        setUserData({ avatarUrl, name, location });
      });
  }, [userId]);

  return (
    <div className="user">
      <img
        alt="User Avatar"
        src={userData.avatarUrl}
        className="user__avatar"
      />
      <div className="user__info">
        <span className="user__name">{userData.name}</span>
        <span className="user__location">{userData.location}</span>
      </div>
    </div>
  );
}
