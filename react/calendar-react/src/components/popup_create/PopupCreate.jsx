import React, { useState, useContext } from "react";
import PropTypes from "prop-types";

import { ServiceContext, WeekContext } from "../../App.jsx";
import Popup from "../popup/Popup.jsx";
import Error from "../error/Error.jsx";

import { getEvent, getFormDate } from "../../utils/formUtils.js";
import { getAutoDatesFromCell } from "../../utils/dateUtils.js";
import useValidation from "../../utils/hooks/useValidation.js";

function PopupCreate({ target, onClose }) {
  const [errors, setErrors] = useState([]);

  const service = useContext(ServiceContext);
  const weekDates = useContext(WeekContext);

  const handleEventCreate = (formData) => {
    const event = getEvent(formData);
    useValidation(event, service.createEvent).then(onClose).catch(setErrors);
  };

  const defaultFormData = getFormDate(
    ...getAutoDatesFromCell(target, weekDates)
  );

  return (
    <Popup
      onClose={onClose}
      onSubmit={handleEventCreate}
      defaultFormData={defaultFormData}
      submitBtnText="Submit"
    >
      {errors.map((error, idx) => (
        <Error key={idx} text={error} />
      ))}
    </Popup>
  );
}

PopupCreate.propTypes = {
  target: PropTypes.instanceOf(HTMLElement).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PopupCreate;
