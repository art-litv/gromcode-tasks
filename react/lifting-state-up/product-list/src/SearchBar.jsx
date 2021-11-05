import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  handleFilterTextChange = event => {
    this.props.onFilterTextChange(event.target.value);
  };

  handleInStockChange = event => {
    this.props.onInStockChange(event.target.checked);
  };

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />
        <p>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            onChange={this.handleInStockChange}
          />{' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}
