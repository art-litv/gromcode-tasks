import React from "react";
import PropTypes from "prop-types";

import Hour from "../hour/Hour";
import Timeline from "../timeline/Timeline";

import "./day.scss";

const Day = ({ dataDay, dayEvents }) => {
  const hours = Array(24)
    .fill()
    .map((_, index) => index);

  const isDayToday = dataDay === new Date().getDate();

  return (
    <div className="calendar__day" data-day={dataDay}>
      {isDayToday && <Timeline timeout={60 * 1000} />}
      {hours.map((hour) => {
        //getting all events from the day we will render
        const hourEvents = dayEvents.filter(
          (event) => event.start.getHours() === hour
        );

        return (
          <Hour key={dataDay + hour} dataHour={hour} hourEvents={hourEvents} />
        );
      })}
    </div>
  );
};

Day.propTypes = {
  dataDay: PropTypes.number.isRequired,
  dayEvents: PropTypes.array.isRequired,
};

export default Day;
