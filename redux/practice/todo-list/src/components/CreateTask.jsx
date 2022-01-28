import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { createTask } from "../utils/tasksUtils";
import * as tasksActions from "../store/actions/tasks.actions";

function CreateTask({ onCreateTask }) {
  const [taskInput, setTaskInput] = useState("");

  return (
    <div className="create-task">
      <input
        className="create-task__input"
        type="text"
        value={taskInput}
        onChange={({ target }) => setTaskInput(target.value)}
      />
      <button
        className="btn create-task__btn"
        onClick={() => {
          onCreateTask(createTask(taskInput));
          setTaskInput("");
        }}
      >
        Create
      </button>
    </div>
  );
}

CreateTask.propTypes = {
  onCreateTask: PropTypes.func.isRequired,
};

const mapDispatch = {
  onCreateTask: tasksActions.createTask,
};

export default connect(null, mapDispatch)(CreateTask);
