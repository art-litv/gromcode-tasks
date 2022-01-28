export const tasksSelector = (state) => state.tasks.tasksList;

export const sortedTasksSelector = (state) => {
  const tasks = tasksSelector(state);
  tasks.sort((t1, t2) => t1.isDone - t2.isDone);
  return tasks;
};
