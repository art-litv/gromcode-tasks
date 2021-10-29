import React from "react";

import Offline from "./Offline.jsx";
import Online from "./Online.jsx";

export default function Status({ isOnline }) {
  return <div className="status">{isOnline ? <Online /> : <Offline />}</div>;
}
