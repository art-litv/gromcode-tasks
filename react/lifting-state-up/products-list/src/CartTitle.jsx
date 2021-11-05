import React from 'react';

export default function CartTitle({ count, userName }) {
  return (
    <div className="cart-title">
      {userName}, you added {count} items
    </div>
  );
}
