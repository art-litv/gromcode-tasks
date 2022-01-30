const parseRawFlightsList = flightsList =>
  flightsList.map(flight => {
    const scheduleTime = new Date(flight.timeArrShedule || flight.timeDepShedule);
    return {
      terminal: flight.term,
      localTime: `${scheduleTime.getHours()}:${scheduleTime.getMinutes()}`,
      status: flight.status,
      destination: flight['airportFromID.city_en'] || flight['airportToID.city_en'],
      airline: flight.airline.en,
      flightId: flight['fltNo'],
    };
  });

export const parseFlightsData = rawData => ({
  departures: parseRawFlightsList(rawData.departure),
  arrivals: parseRawFlightsList(rawData.arrival),
});
