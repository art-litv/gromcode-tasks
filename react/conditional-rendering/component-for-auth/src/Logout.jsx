import React from "react";

export default function Logout({ onLogout }) {
  return (
    <button className="btn logout" onClick={onLogout}>
      Logout
    </button>
  );
}
