import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import store from './store';

import Header from './components/Header';
import { MainPage } from './pages';

export default function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/departures" element={<MainPage />} />
            <Route path="/arrivals" element={<MainPage />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}
