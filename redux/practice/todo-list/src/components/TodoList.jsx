import React from "react";

import TasksList from "./TasksList";
import CreateTask from "./CreateTask";

export default function TodoList() {
  return (
    <>
      <h1 className="title">Todo List</h1>
      <main className="todo-list">
        <CreateTask />
        <TasksList />
      </main>
    </>
  );
}
