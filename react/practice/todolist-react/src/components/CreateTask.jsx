import React from "react";
import PropTypes from "prop-types";

export default class CreateTask extends React.PureComponent {
  state = {
    taskInput: "",
  };

  handleTaskInput = ({ target: { value } }) => {
    this.setState({ taskInput: value });
  };

  render() {
    return (
      <div className="create-task">
        <input
          className="create-task__input"
          type="text"
          value={this.state.taskInput}
          onChange={this.handleTaskInput}
        />
        <button
          className="btn create-task__btn"
          onClick={() => {
            this.props.onTaskCreation(this.state.taskInput);
            this.setState({ taskInput: "" });
          }}
        >
          Create
        </button>
      </div>
    );
  }
}

CreateTask.propTypes = {
  onTaskCreation: PropTypes.func.isRequired,
};
