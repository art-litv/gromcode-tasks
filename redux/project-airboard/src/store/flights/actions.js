export const FLIGHTS_DATA_RECEIVED = 'FLIGHTS/FLIGHTS_DATA_RECEIVED';
export const SET_FLIGHTS_TYPE = 'FLIGHTS/SET_FLIGHTS_TYPE';

import FlightsAPI from '../../services/FlightsAPI';
import { parseFlightsData } from '../../utils/flights';

export const flightsDataReceived = flightsData => ({
  type: FLIGHTS_DATA_RECEIVED,
  payload: {
    flightsData,
  },
});

export const setFlightsType = newFlightsType => ({
  type: SET_FLIGHTS_TYPE,
  payload: {
    newFlightsType,
  },
});

export const getFlights = () => async dispatch => {
  const rawFlightsData = await FlightsAPI.getFlights();
  const flightsData = parseFlightsData(rawFlightsData.body);
  dispatch(flightsDataReceived(flightsData));
};
