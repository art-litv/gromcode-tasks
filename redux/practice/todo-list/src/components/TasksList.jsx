import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import * as tasksActions from "../store/actions/tasks.actions";
import { sortedTasksSelector } from "../store/selectors/tasks.selectors";

import Task from "./Task";

function TasksList({ tasks, getTasks, updateTask, deleteTask }) {
  useEffect(async () => {
    getTasks();
  }, []);

  return (
    <ul className="list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          taskData={task}
          onTaskUpdate={updateTask}
          onTaskDelete={deleteTask}
        />
      ))}
    </ul>
  );
}

TasksList.propTypes = {
  tasks: PropTypes.array,
  getTasks: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

const mapState = (state) => ({
  tasks: sortedTasksSelector(state),
});

const mapDispatch = {
  getTasks: tasksActions.getTasks,
  updateTask: tasksActions.updateTask,
  deleteTask: tasksActions.deleteTask,
};

export default connect(mapState, mapDispatch)(TasksList);
