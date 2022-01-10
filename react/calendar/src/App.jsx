import React from "react";

import Header from "./components/header/Header.jsx";
import Calendar from "./components/calendar/Calendar.jsx";

import useCurrentWeek from "./utils/hooks/useCurrentWeek.js";
import useEventsService from "./utils/hooks/useEventsService.js";

import "./common.scss";

export const ServiceContext = React.createContext();
export const WeekContext = React.createContext();

function App() {
  const [weekDates, weekApi] = useCurrentWeek(new Date());
  const [events, service] = useEventsService();

  return (
    <ServiceContext.Provider value={service}>
      <WeekContext.Provider value={weekDates}>
        <Header {...weekApi} weekDates={weekDates} />
        <Calendar events={events} weekDates={weekDates} />
      </WeekContext.Provider>
    </ServiceContext.Provider>
  );
}

export default App;
