import React from 'react';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  onChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  onSearch = event => {
    event.preventDefault();
    alert('Search text: ' + this.state.value);
  };

  render() {
    return (
      <form className="search" onSubmit={this.onSearch}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.onChange}
          className="search__input"
        />
        <button className="search__button" type="submit">
          Search
        </button>
      </form>
    );
  }
}
