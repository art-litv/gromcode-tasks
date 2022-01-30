import React from 'react';
import classnames from 'classnames';

import './search-form.scss';

function SearchForm({ className }) {
  return (
    <form className={classnames('search-form', className)}>
      <legend className="search-form__title">Search flight</legend>
      <div className="search-form__content">
        <div className="search-form__input-group">
          <i className="search-form__icon fas fa-search"></i>
          <input
            className="search-form__input"
            name="search"
            placeholder="Airline, destination or flight #"
          />
        </div>
        <button className="search-form__btn" type="submit">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
