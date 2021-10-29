import React from "react";

export default function Login({ onLogin }) {
  return (
    <button className="btn login" onClick={onLogin}>
      Login
    </button>
  );
}
