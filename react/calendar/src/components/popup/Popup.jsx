import React from "react";
import PropTypes from "prop-types";

import EventForm from "../event_form/EventForm";

import "./popup.scss";

function Popup({
  onClose,
  onSubmit,
  defaultFormData,
  submitBtnText,
  children,
}) {
  return (
    <div className="popup" onClick={(event) => event.stopPropagation()}>
      <div className="popup__content">
        <button className="popup__close-btn" onClick={onClose}>
          +
        </button>
        <EventForm
          onSubmit={onSubmit}
          submitBtnText={submitBtnText}
          defaultFormData={defaultFormData}
        />
        {children}
      </div>
    </div>
  );
}

Popup.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  defaultFormData: PropTypes.object,
  submitBtnText: PropTypes.string,
  children: PropTypes.array,
};

Popup.defaultProps = {
  defaultFormData: {},
  submitBtnText: "Submit",
  children: [],
};

export default Popup;
