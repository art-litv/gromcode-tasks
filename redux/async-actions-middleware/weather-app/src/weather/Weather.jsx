import React, { useEffect } from "react";
import { connect } from "react-redux";

import { citiesSelector } from "./weather.selectors";
import * as weatherActions from "./weather.actions";

import CitiesList from "../CitiesList";

function Weather({ cities, getWeatherData }) {
  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <CitiesList cities={cities} />
    </main>
  );
}

const mapState = (state) => ({
  cities: citiesSelector(state),
});

const mapDispatch = {
  getWeatherData: weatherActions.getWeatherData,
};

export default connect(mapState, mapDispatch)(Weather);
