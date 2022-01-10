import { useState, useEffect } from "react";

import { explicitDatesInEvent } from "../dateUtils.js";
import EventsService from "../../service/eventsService.js";

export default function useEventsService() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  function fetchEvents() {
    EventsService.getEvents().then((events) => {
      const explicitDatesEvents = events.map(explicitDatesInEvent);
      setEvents(explicitDatesEvents);
    });
  }

  const getEvent = (id) =>
    EventsService.getEvent(id).then(explicitDatesInEvent);

  const getEvents = () =>
    EventsService.getEvents().then((events) =>
      events.map(explicitDatesInEvent)
    );

  const createEvent = (event) =>
    EventsService.createEvent(event).then(fetchEvents);

  const deleteEvent = (id) => EventsService.deleteEvent(id).then(fetchEvents);

  const updateEvent = (event) =>
    EventsService.updateEvent(event).then(fetchEvents);

  return [
    events,
    {
      getEvent,
      getEvents,
      createEvent,
      deleteEvent,
      updateEvent,
    },
  ];
}
