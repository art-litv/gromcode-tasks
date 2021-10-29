import React from "react";

export default function Message({ text }) {
  if (!text) return;
  return <div className="message">{text}</div>;
}
