export default class TasksAPI {
  static baseUrl = "https://6151a12d4a5f22001701d31f.mockapi.io/tasks";

  static getTasks = async () => {
    const response = await fetch(TasksAPI.baseUrl);
    const data = await response.json();
    return data;
  };

  static createTask = (task) => {
    const params = {
      method: "POST",
      body: JSON.stringify(task),
      headers: { "Content-Type": "application/json" },
    };

    return fetch(TasksAPI.baseUrl, params);
  };

  static updateTask = (task) => {
    const params = {
      method: "PUT",
      body: JSON.stringify(task),
      headers: { "Content-Type": "application/json" },
    };

    return fetch(TasksAPI.baseUrl + `/${task.id}`, params);
  };

  static deleteTask = (taskId) => {
    const params = {
      method: "DELETE",
    };

    return fetch(TasksAPI.baseUrl + `/${taskId}`, params);
  };
}
