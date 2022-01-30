import React from 'react';

import './nav-tabs.scss';

import NavItem from '../NavItem';

export default function NavTabs({ flightsType }) {
  return (
    <ul className="nav-tabs">
      <NavItem
        text="Departures"
        icon={<i className="nav-item__icon fas fa-plane-departure"></i>}
        link="/departures"
        active={flightsType === 'departures'}
      />
      <NavItem
        text="Arrivals"
        icon={<i className="nav-item__icon fas fa-plane-arrival"></i>}
        link="/arrivals"
        active={flightsType === 'arrivals'}
      />
    </ul>
  );
}
