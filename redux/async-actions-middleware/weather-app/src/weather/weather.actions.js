export const CITIES_DATA_RECEIVED = "WEATHER/USER_DATA_RECIEVED";

import CitiesAPI from "../api";

export const citiesDataReceived = (citiesData) => ({
  type: CITIES_DATA_RECEIVED,
  payload: {
    citiesData,
  },
});

export const getWeatherData = () => async (dispatch) => {
  const citiesList = await CitiesAPI.getCities();
  dispatch(citiesDataReceived(citiesList));
};
