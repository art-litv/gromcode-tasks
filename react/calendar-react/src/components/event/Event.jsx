import React, { useState } from "react";
import PropTypes from "prop-types";

import PopupUpdate from "../popup_update/PopupUpdate";

import "./event.scss";

const Event = ({ id, height, marginTop, title, time }) => {
  const eventStyle = {
    height,
    marginTop,
  };

  const [isPopupOpened, setPopupOpened] = useState(false);

  const switchPopup = (event) => {
    event?.stopPropagation();
    event?.nativeEvent?.stopImmediatePropagation();
    setPopupOpened((isOpened) => !isOpened);
  };

  return (
    <>
      {isPopupOpened && <PopupUpdate eventId={id} onClose={switchPopup} />}
      <div style={eventStyle} className="event" onClick={switchPopup}>
        <div className="event__title">{title}</div>
        <div className="event__time">{time}</div>
      </div>
    </>
  );
};

Event.propTypes = {
  id: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  marginTop: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default Event;
