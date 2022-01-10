import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

import { ServiceContext } from "../../App.jsx";
import Popup from "../popup/Popup";
import Error from "../error/Error";

import { getFormData } from "../../utils/formUtils.js";
import { getEvent } from "../../utils/formUtils.js";
import useValidation from "../../utils/hooks/useValidation.js";

function PopupUpdate({ eventId, onClose }) {
  const [eventData, setEventData] = useState(null);
  const [errors, setErrors] = useState([]);

  const service = useContext(ServiceContext);

  useEffect(() => {
    service.getEvent(eventId).then(setEventData);
  }, [eventId]);

  const handleEventUpdate = (formData) => {
    const event = getEvent(formData, eventId);
    useValidation(event, service.updateEvent).then(onClose).catch(setErrors);
  };

  const handleEventDelete = (event) => {
    event.stopPropagation();
    service.deleteEvent(eventId).then(onClose);
  };

  const defaultFormData = eventData ? getFormData(eventData) : {};

  return (
    <Popup
      onClose={onClose}
      onSubmit={handleEventUpdate}
      defaultFormData={defaultFormData}
      submitBtnText="Save changes"
    >
      <img
        className="popup__delete-btn"
        src="https://www.pngrepo.com/download/79440/delete-button.png"
        onClick={handleEventDelete}
      />
      {errors.map((error, idx) => (
        <Error key={idx} text={error} />
      ))}
    </Popup>
  );
}

PopupUpdate.propTypes = {
  eventId: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PopupUpdate;
