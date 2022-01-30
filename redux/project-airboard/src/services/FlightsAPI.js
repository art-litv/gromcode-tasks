export default class FlightsAPI {
  static baseUrl = 'https://api.iev.aero/api/flights/10-02-2020';

  static getFlights = async () => {
    const response = await fetch(FlightsAPI.baseUrl);
    return await response.json();
  };
}
