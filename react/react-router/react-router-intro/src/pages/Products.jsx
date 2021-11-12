import React from "react";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <div class="page__content">
      <h1>Products</h1>
      <p>We will add some products. Later... 😇</p>
      <Link to="/contacts">Contacts</Link>
    </div>
  );
}
