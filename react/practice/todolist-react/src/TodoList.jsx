import React from "react";

import TasksAPI from "./TasksAPI";

import TasksList from "./TasksList.jsx";
import CreateTask from "./CreateTask.jsx";

export default class TodoList extends React.Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    this.fetchTasks();
  }

  createTask = (text) => ({
    text,
    isDone: false,
    createdAt: new Date(),
  });

  fetchTasks = () => {
    TasksAPI.getTasks().then((tasks) => this.setState({ tasks }));
  };

  handleTaskCreate = (taskText) => {
    const newTask = this.createTask(taskText);
    TasksAPI.createTask(newTask).then(this.fetchTasks);
  };

  handleTaskUpdate = (task) => {
    TasksAPI.updateTask(task).then(this.fetchTasks);
  };

  handleTaskDelete = (taskId) => {
    TasksAPI.deleteTask(taskId).then(this.fetchTasks);
  };

  render() {
    return (
      <>
        <h1 className="title">Todo List</h1>
        <main className="todo-list">
          <CreateTask onTaskCreation={this.handleTaskCreate} />
          <TasksList
            tasks={this.state.tasks}
            onTaskUpdate={this.handleTaskUpdate}
            onTaskDelete={this.handleTaskDelete}
          />
        </main>
      </>
    );
  }
}
