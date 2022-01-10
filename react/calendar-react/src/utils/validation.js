import EventsService from "../service/eventsService";
import { explicitDatesInEvent, getDayMinutes } from "./dateUtils";

export const validators = {
  isCrossing: async (event) => {
    const events = await EventsService.getEvents()
      .then((events) => events.map(explicitDatesInEvent))
      .then((events) => events.filter(({ id }) => event.id !== id));

    return events.find(
      (otherEvent) =>
        event.start <= otherEvent.end && event.end >= otherEvent.start
    )
      ? "Event is crossing"
      : undefined;
  },

  exceedsMaxLength: async (event, maxHours = 6) => {
    const eventMinsLength =
      getDayMinutes(event.end) - getDayMinutes(event.start);
    return eventMinsLength >= maxHours * 60
      ? `Event exceeds max length of ${maxHours} hours`
      : undefined;
  },

  isNotValidLength: async (event, validLength = 15) =>
    !(
      event.start.getMinutes() % validLength === 0 &&
      event.end.getMinutes() % validLength === 0
    )
      ? `Event's start and end must be multiple of ${validLength} mins`
      : undefined,
};

export const validateEvent = async (event, validators) => {
  return validators.reduce(async (acc, validator) => {
    const errors = await acc;
    const result = await validator(event);
    if (result) errors.push(result);
    return errors;
  }, Promise.resolve([]));
};
