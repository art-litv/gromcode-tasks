import React from "react";
import PropTypes from "prop-types";

export default function Task({ taskData, onTaskUpdate, onTaskDelete }) {
  return (
    <li className={`list-item ${taskData.isDone && "list-item_done"}`}>
      <input
        type="checkbox"
        name="isDone"
        className="list-item__checkbox"
        checked={taskData.isDone}
        onChange={() => {
          taskData.isDone = !taskData.isDone;
          onTaskUpdate(taskData);
        }}
      />
      <span className="list-item__text">{taskData.text}</span>
      <button
        className="list-item__delete-btn"
        onClick={() => onTaskDelete(taskData.id)}
      ></button>
    </li>
  );
}

Task.propTypes = {
  taskData: PropTypes.object.isRequired,
  onTaskUpdate: PropTypes.func.isRequired,
  onTaskDelete: PropTypes.func.isRequired,
};
