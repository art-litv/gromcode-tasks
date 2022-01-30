import React from 'react';

import './main-page.scss';

import SearchForm from '../../components/SearchForm';
import SearchResults from '../../components/SearchResults';

export default function MainPage() {
  return (
    <div className="main-page">
      <SearchForm className="main-page__search-form" />
      <SearchResults className="main-page__search-results" />
    </div>
  );
}
