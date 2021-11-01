import React from "react";

export default function NumbersList({ numbers }) {
  return (
    <ul className="numbers-list">
      {numbers.map((num) => (
        <li className="numbers-list__item">{num}</li>
      ))}
    </ul>
  );
}
