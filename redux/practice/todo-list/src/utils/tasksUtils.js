export const createTask = (text) => ({
  text,
  isDone: false,
  createAt: new Date(),
});
