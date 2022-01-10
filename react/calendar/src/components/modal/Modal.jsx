import React, { useState, useContext } from "react";
import PropTypes from "prop-types";

import { ServiceContext } from "../../App.jsx";
import EventForm from "../event_form/EventForm.jsx";
import Error from "../error/Error.jsx";

import { getEvent, getFormDate } from "../../utils/formUtils.js";
import { getAutoDatesByCurrent } from "../../utils/dateUtils.js";
import useValidation from "../../utils/hooks/useValidation.js";

import "./modal.scss";

function Modal({ onClose }) {
  const [errors, setErrors] = useState([]);

  const service = useContext(ServiceContext);

  const handleEventCreate = (formData) => {
    const event = getEvent(formData);
    useValidation(event, service.createEvent).then(onClose).catch(setErrors);
  };

  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button className="create-event__close-btn" onClick={onClose}>
            +
          </button>
          <EventForm
            onSubmit={handleEventCreate}
            submitBtnText="Create"
            defaultFormData={getFormDate(...getAutoDatesByCurrent())}
          />
        </div>
        {errors.map((error) => (
          <Error key={error} text={error} />
        ))}
      </div>
    </div>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Modal;
