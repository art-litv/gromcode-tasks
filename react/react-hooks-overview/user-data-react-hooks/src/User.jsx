import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function Counter() {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    function fetchData() {
      fetch("https://api.github.com/users/" + userId)
        .then((res) => res.json())
        .then((data) => setUserData(data));
    }

    fetchData();
  }, [userId]);

  return (
    userData && (
      <div className="user">
        <img
          alt="User Avatar"
          src={userData.avatar_url}
          className="user__avatar"
        />
        <div className="user__info">
          <span className="user__name">{userData.name}</span>
          <span className="user__location">{userData.location}</span>
        </div>
      </div>
    )
  );
}
