import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home.jsx";
import Products from "./Products.jsx";
import Contacts from "./Contacts.jsx";
import PageNotFound from "./PageNotFound.jsx";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
