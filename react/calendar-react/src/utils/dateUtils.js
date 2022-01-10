export const getWeekStartDate = (date) => {
  const dateCopy = new Date(date);
  const dayOfWeek = dateCopy.getDay();
  const difference =
    dayOfWeek === 0
      ? -6 // for Sunday
      : 1 - dayOfWeek;

  const monday = new Date(dateCopy.setDate(date.getDate() + difference));
  return new Date(monday.getFullYear(), monday.getMonth(), monday.getDate());
};

const getStringMonth = (date) => {
  return date.toLocaleString("default", { month: "short" });
};

export const getWeekMonthString = (weekDates) => {
  const weekStart = weekDates[0];
  const weekEnd = weekDates.at(-1);
  const areDatesInSameMonth = weekStart.getMonth() === weekEnd.getMonth();

  return areDatesInSameMonth
    ? getStringMonth(weekStart)
    : `${getStringMonth(weekStart)} – ${getStringMonth(weekEnd)}`;
};

export const getWeekYearString = (weekDates) => {
  const weekStartYear = weekDates[0].getFullYear();
  const weekEndYear = weekDates.at(-1).getFullYear();
  const areDatesInSameYear = weekStartYear === weekEndYear;

  return areDatesInSameYear
    ? weekStartYear
    : `${weekStartYear} – ${weekEndYear}`;
};

export const generateWeekRange = (startDate) => {
  const result = [];
  for (let i = 0; i < 7; i += 1) {
    const base = new Date(startDate);
    result.push(new Date(base.setDate(base.getDate() + i)));
  }
  return result;
};

export const getDateTime = (date, time) => {
  const [hours, minutes] = time.split(":");
  const withHours = new Date(new Date(date).setHours(Number(hours)));
  const withMinutes = new Date(new Date(withHours).setMinutes(Number(minutes)));
  return withMinutes;
};

export const explicitDatesInEvent = (event) => ({
  ...event,
  start: new Date(event.start),
  end: new Date(event.end),
});

const getCeilByMinsDate = (date, minutes) => {
  const ms = 1000 * 60 * minutes;
  const roundedDate = new Date(Math.ceil(date.getTime() / ms) * ms);
  return roundedDate;
};

export const getAutoDatesByCurrent = () => {
  const startDate = getCeilByMinsDate(new Date(), 60);
  const endDate = new Date(startDate);
  endDate.setHours(startDate.getHours() + 1);
  return [startDate, endDate];
};

export const getAutoDatesFromCell = (target, weekDates) => {
  const end = target.dataset.time;
  const start = end - 1;
  const day = target.closest(".calendar__day").dataset.day;
  const startDate = new Date(weekDates.find((date) => date.getDate() === +day));
  const endDate = new Date(startDate);
  startDate.setHours(start);
  endDate.setHours(end);
  return [startDate, endDate];
};

export const getDayMinutes = (date) => date.getHours() * 60 + date.getMinutes();

export const formatMins = (mins) => {
  return mins < 10 ? `0${mins}` : mins;
};

export const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
