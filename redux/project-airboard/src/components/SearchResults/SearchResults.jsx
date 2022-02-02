import React, { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import classnames from 'classnames';

import './search-results.scss';

import NavTabs from '../NavTabs';
import Table from '../Table';

import { getColumns } from '../../utils/flightTableUtils';
import { searchFlights, sortByTime } from '../../utils/flights';
import { ROUTES_FLIGHTS_TYPE } from '../../store/flights/routes-state';

function SearchResults({ flights, flightsType, getFlights, setFlightsType, className }) {
  const location = useLocation();
  const searchParam = useSearchParams()[0].get('search')?.toLowerCase();

  useEffect(() => {
    getFlights();
  }, []);

  useEffect(() => {
    setFlightsType(ROUTES_FLIGHTS_TYPE[location.pathname]);
  }, [location.pathname]);

  const filteredFlights = sortByTime(searchFlights(flights, searchParam || ''));

  return (
    <div className={classnames('search-results', className)}>
      <NavTabs flightsType={flightsType} />
      {filteredFlights.length ? (
        <Table
          className="search-results__results-table"
          data={filteredFlights}
          columns={getColumns()}
        />
      ) : (
        searchParam && <p className="search-results__not-found">No flights</p>
      )}
    </div>
  );
}

export default SearchResults;
