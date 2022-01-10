export default class EventsService {
  static baseUrl = "https://6151a12d4a5f22001701d31f.mockapi.io/events";
  static baseHeaders = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  static getEvents = () => {
    return fetch(this.baseUrl).then((res) => res.json());
  };

  static getEvent = (eventId) => {
    return fetch(this.baseUrl + "/" + eventId).then((res) => res.json());
  };

  static createEvent = (event) => {
    return fetch(this.baseUrl, {
      method: "POST",
      headers: this.baseHeaders,
      body: JSON.stringify(event),
    });
  };

  static updateEvent = (event) => {
    return fetch(this.baseUrl + "/" + event.id, {
      method: "PUT",
      headers: this.baseHeaders,
      body: JSON.stringify(event),
    });
  };

  static deleteEvent = (eventId) => {
    return fetch(this.baseUrl + "/" + eventId, {
      method: "DELETE",
      headers: this.baseHeaders,
    });
  };
}
