import React from "react";
import PropTypes from "prop-types";

export default class Task extends React.PureComponent {
  task = {
    id: this.props.id,
    text: this.props.text,
    isDone: this.props.isDone,
    createdAt: this.props.createdAt,
  };

  render() {
    return (
      <li className={`list-item ${this.task.isDone && "list-item_done"}`}>
        <input
          type="checkbox"
          name="isDone"
          className="list-item__checkbox"
          checked={this.task.isDone}
          onChange={() => {
            this.task.isDone = !this.task.isDone;
            this.props.onTaskUpdate(this.task);
          }}
        />
        <span className="list-item__text">{this.task.text}</span>
        <button
          className="list-item__delete-btn"
          onClick={() => this.props.onTaskDelete(this.task.id)}
        ></button>
      </li>
    );
  }
}

Task.propTypes = {
  id: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onTaskUpdate: PropTypes.func.isRequired,
  onTaskDelete: PropTypes.func.isRequired,
};
