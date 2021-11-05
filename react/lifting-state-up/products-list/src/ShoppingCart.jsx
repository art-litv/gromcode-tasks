import React from 'react';

import CartTitle from './CartTitle.jsx';
import ProductsList from './ProductsList.jsx';

export default class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { id: '1', name: 'iPhone 11', price: 999 },
        { id: '2', name: 'iPad Pro', price: 799 },
      ],
    };
  }

  render() {
    return (
      <div className="column">
        <CartTitle count={this.state.products.length} userName={this.props.userName} />
        <ProductsList cartItems={this.state.products} />
      </div>
    );
  }
}
