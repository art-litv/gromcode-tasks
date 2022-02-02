const parseRawFlightsList = flightsList =>
  flightsList.map(flight => {
    const scheduleTime = new Date(flight.timeArrShedule || flight.timeDepShedule);
    return {
      terminal: flight.term,
      localTime: scheduleTime.toTimeString().slice(0, 5),
      status: flight.status,
      destination: flight['airportFromID.city_en'] || flight['airportToID.city_en'],
      airline: flight.airline.en,
      flightId: flight.fltNo,
    };
  });

export const parseFlightsData = rawData => ({
  departure: parseRawFlightsList(rawData.departure),
  arrival: parseRawFlightsList(rawData.arrival),
});

export const searchFlights = (flights, searchParam) =>
  flights.filter(
    flight =>
      flight.destination.toLowerCase().includes(searchParam) ||
      flight.airline.name.toLowerCase().includes(searchParam) ||
      flight.flightId.toLowerCase().includes(searchParam),
  );

export const sortByTime = (flights, dir = 'asc') =>
  flights.sort((f1, f2) => {
    const date1 = new Date('1970/01/01 ' + f1.localTime);
    const date2 = new Date('1970/01/01 ' + f2.localTime);
    return dir === 'asc' ? date1 - date2 : date2 - date1;
  });
