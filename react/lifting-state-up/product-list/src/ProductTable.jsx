import React from 'react';

import ProductRow from './ProductRow.jsx';
import ProductCategoryRow from './ProductCategoryRow.jsx';

function existsProduct(product, filterText, inStockOnly) {
  if (product.name.indexOf(filterText) === -1 || (inStockOnly && !product.stocked)) {
    return false;
  }
  return true;
}

export default function ProductTable({ products, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  products.forEach(product => {
    if (!existsProduct(product, filterText, inStockOnly)) return;

    if (product.category !== lastCategory) {
      rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
