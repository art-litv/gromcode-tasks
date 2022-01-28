export const TASKS_DATA_RECEIVED = "TASKS/TASKS_DATA_RECEIVED";

import TasksAPI from "../../services/TasksAPI";

export const tasksDataReceived = (tasksData) => ({
  type: TASKS_DATA_RECEIVED,
  payload: {
    tasksData,
  },
});

export const getTasks = () => async (dispatch) => {
  const tasksList = await TasksAPI.getTasks();
  dispatch(tasksDataReceived(tasksList));
};

export const createTask = (taskData) => async (dispatch) => {
  await TasksAPI.createTask(taskData);
  getTasks()(dispatch);
};

export const deleteTask = (taskId) => async (dispatch) => {
  await TasksAPI.deleteTask(taskId);
  getTasks()(dispatch);
};

export const updateTask = (taskId, taskData) => async (dispatch) => {
  await TasksAPI.updateTask(taskId, taskData);
  getTasks()(dispatch);
};
