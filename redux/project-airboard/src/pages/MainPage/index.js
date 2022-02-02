import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { stringify } from 'qs';

import { getDateParams } from '../../utils/urlParams';
import useEffectRedirect from '../../utils/hooks/useEffectRedirect';

import './main-page.scss';

import SearchForm from '../../components/SearchForm';
import ArrivalSearchResults from '../../components/SearchResults/ArrivalSearchResults.jsx';
import DepartureSearchResults from '../../components/SearchResults/DepartureSearchResults.jsx';

export default function MainPage() {
  const location = useLocation();
  const queryParams = getDateParams();
  location.pathname === '/' && useEffectRedirect('/departures/?' + stringify(queryParams), []);

  return (
    <div className="main-page">
      <SearchForm className="main-page__search-form" />
      <Routes>
        <Route
          path="departures"
          element={<DepartureSearchResults className="main-page__search-results" />}
        />
        <Route
          path="arrivals"
          element={<ArrivalSearchResults className="main-page__search-results" />}
        />
      </Routes>
    </div>
  );
}
