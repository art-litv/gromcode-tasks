export default class FlightsAPI {
  static baseUrl = `https://api.iev.aero/api/flights/${new Date().toISOString().slice(0, 10)}`;

  static getFlights = async () => {
    const response = await fetch(FlightsAPI.baseUrl);
    return await response.json();
  };
}
