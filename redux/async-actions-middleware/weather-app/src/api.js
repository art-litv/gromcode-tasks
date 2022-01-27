export default class CitiesAPI {
  static baseUrl = "https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/cities";

  static async getCities() {
    const response = await fetch(this.baseUrl);
    return response.json();
  }
}
