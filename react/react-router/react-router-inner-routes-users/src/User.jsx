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
    <div class="user">
      <img alt="User Avatar" src={userData.avatarUrl} class="user__avatar" />
      <div class="user__info">
        <span class="user__name">{userData.name}</span>
        <span class="user__location">{userData.location}</span>
      </div>
    </div>
  );
}
