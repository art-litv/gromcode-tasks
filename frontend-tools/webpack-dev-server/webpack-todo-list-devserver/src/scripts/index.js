import "./index.scss";

import { renderTasks } from "./common/renderer.js";
import "./tasks/createTask.js";
import { getItem, setItem } from "./common/storage.js";
import { getTasksList } from "./common/tasksGateway.js";

const renderCurrentTasks = () => {
  getTasksList().then((tasksList) => setItem("tasksList", tasksList));
  renderTasks(getItem("tasksList"));
};

document.addEventListener("DOMContentLoaded", renderCurrentTasks);
window.addEventListener("storage", renderCurrentTasks);
