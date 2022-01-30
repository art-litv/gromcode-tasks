import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import classnames from 'classnames';

import './search-results.scss';

import NavTabs from '../NavTabs';
import Table from '../Table';

import { getColumns } from '../../utils/flightTableUtils';
import { flightsSelector, flightsTypeSelector } from '../../store/flights/selectors';
import { flightsActions } from '../../store/flights';

function SearchResults({ flights, flightsType, getFlights, setFlightsType, className }) {
  const path = useLocation().pathname.slice(1); // "/arrivals" -> "arrivals"

  useEffect(() => {
    getFlights();
  }, []);

  useEffect(() => {
    const newFlightsType = path === '' ? 'departures' : path;
    setFlightsType(newFlightsType);
  }, [path]);

  return (
    <div className={classnames('search-results', className)}>
      <NavTabs flightsType={flightsType} />
      <Table
        className="search-results__results-table"
        data={flights[flightsType]}
        columns={getColumns()}
      />
    </div>
  );
}

const mapState = state => ({
  flights: flightsSelector(state),
  flightsType: flightsTypeSelector(state),
});

const mapDispatch = {
  getFlights: flightsActions.getFlights,
  setFlightsType: flightsActions.setFlightsType,
};

export default connect(mapState, mapDispatch)(SearchResults);
