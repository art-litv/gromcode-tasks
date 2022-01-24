import React from "react";

function Option({ title, optionsList, onToggle }) {
  return (
    <div className="options">
      <div className="options__title">{title}</div>
      <ul className="options__list">
        {optionsList.map((option) => (
          <li key={option.id}>
            <button
              onClick={() => onToggle(option.id)}
              className="options__list-item"
            >
              {option.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Option;
