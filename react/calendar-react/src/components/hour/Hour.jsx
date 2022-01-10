import React, { useState } from "react";
import PropTypes from "prop-types";

import { formatMins } from "../../../src/utils/dateUtils.js";

import Event from "../event/Event";
import PopupCreate from "../popup_create/PopupCreate";

const Hour = ({ dataHour, hourEvents }) => {
  const [target, setTarget] = useState(undefined);

  const closePopup = () => setTarget(undefined);
  const openPopup = ({ target }) => {
    setTarget(target);
  };

  return (
    <>
      {target && <PopupCreate target={target} onClose={closePopup} />}
      <div
        className="calendar__time-slot"
        onClick={openPopup}
        data-time={dataHour + 1}
      >
        {/* if no events in the current hour nothing will render here */}
        {hourEvents.map(({ id, start, end, title }) => {
          const eventStart = `${start.getHours()}:${formatMins(
            start.getMinutes()
          )}`;
          const eventEnd = `${end.getHours()}:${formatMins(end.getMinutes())}`;

          return (
            <Event
              key={id}
              id={id}
              //calculating event height = duration of event in minutes
              height={(end.getTime() - start.getTime()) / (1000 * 60)}
              marginTop={start.getMinutes()}
              time={`${eventStart} - ${eventEnd}`}
              title={title}
            />
          );
        })}
      </div>
    </>
  );
};

Hour.propTypes = {
  dataHour: PropTypes.number.isRequired,
  hourEvents: PropTypes.array.isRequired,
};

export default Hour;
