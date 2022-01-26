export default class UsersAPI {
  static baseUrl = "https://api.github.com/users/";

  static async fetchUser(userId) {
    const response = await fetch(this.baseUrl + userId);
    return response.json();
  }
}
