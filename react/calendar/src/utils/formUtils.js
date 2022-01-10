export const getEvent = (formData, eventId) => {
  const event = {
    title: formData.title,
    start: new Date(formData.date + " " + formData.startTime),
    end: new Date(formData.date + " " + formData.endTime),
    description: formData.description,
  };
  if (eventId) event["id"] = eventId;
  return event;
};

export const getFormData = (event) => ({
  title: event.title,
  ...getFormDate(event.start, event.end),
  description: event.description,
});

export const getFormDate = (startDate, endDate) => {
  return {
    date: startDate.toLocaleDateString("en-CA"),
    startTime: startDate.toTimeString().slice(0, 5),
    endTime: endDate.toTimeString().slice(0, 5),
  };
};
