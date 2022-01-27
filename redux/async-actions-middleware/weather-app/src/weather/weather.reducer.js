import { CITIES_DATA_RECEIVED } from "./weather.actions";

const initialState = {
  citiesList: [],
};

export default function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case CITIES_DATA_RECEIVED:
      return {
        ...state,
        citiesList: action.payload.citiesData,
      };
    default:
      return state;
  }
}
