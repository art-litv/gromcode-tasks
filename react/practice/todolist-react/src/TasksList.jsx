import React from "react";
import PropTypes from "prop-types";

import Task from "./Task.jsx";

export default class TasksList extends React.Component {
  render() {
    return (
      <ul className="list">
        {this.props.tasks.map((task) => (
          <Task
            key={task.id}
            {...task}
            onTaskUpdate={this.props.onTaskUpdate}
            onTaskDelete={this.props.onTaskDelete}
          />
        ))}
      </ul>
    );
  }
}

TasksList.propTypes = {
  tasks: PropTypes.array,
  onTaskUpdate: PropTypes.func.isRequired,
  onTaskDelete: PropTypes.func.isRequired,
};

TasksList.defaultProps = {
  tasks: [],
};
