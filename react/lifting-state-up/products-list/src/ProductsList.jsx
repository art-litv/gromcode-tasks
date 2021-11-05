import React from 'react';

function getTotal(cartItems) {
  return cartItems.reduce((acc, { price }) => acc + price, 0);
}

export default function ProductsList({ cartItems }) {
  return (
    <div className="products">
      <ul className="products__list">
        {cartItems.map(({ id, name, price }) => (
          <li key={id} className="products__list-item">
            <span className="products__item-name">{name}</span>
            <span className="products__item-price">${price}</span>
          </li>
        ))}
      </ul>
      <div className="products__total">Total: ${getTotal(cartItems)}</div>
    </div>
  );
}
