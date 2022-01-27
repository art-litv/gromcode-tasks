import React from "react";

import City from "./City";

const CitiesList = ({ cities }) => {
  return (
    <ul className="cities-list">
      {cities.map(({ id, name, temperature }) => (
        <City key={id} name={name} temperature={temperature} />
      ))}
    </ul>
  );
};

export default CitiesList;
