import React from "react";
import PropTypes from "prop-types";

import useForm from "../../utils/hooks/useForm.js";

import "./event_form.scss";

function EventForm({ onSubmit, submitBtnText, defaultFormData }) {
  const [formData, formApi] = useForm(defaultFormData);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        className="event-form__field"
        value={formData.title || ""}
        onChange={formApi.handleChange}
      />
      <div className="event-form__time">
        <input
          type="date"
          name="date"
          className="event-form__field"
          value={formData.date || ""}
          onChange={formApi.handleChange}
        />
        <input
          type="time"
          name="startTime"
          className="event-form__field"
          value={formData.startTime || ""}
          onChange={formApi.handleChange}
        />
        <span>-</span>
        <input
          type="time"
          name="endTime"
          className="event-form__field"
          value={formData.endTime || ""}
          onChange={formApi.handleChange}
        />
      </div>
      <textarea
        name="description"
        placeholder="Description"
        className="event-form__field"
        value={formData.description || ""}
        onChange={formApi.handleChange}
      ></textarea>
      <button type="submit" className="event-form__submit-btn">
        {submitBtnText}
      </button>
    </form>
  );
}

EventForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  submitBtnText: PropTypes.string,
  defaultFormData: PropTypes.object,
};

EventForm.defaultProps = {
  submitBtnText: "Submit",
  defaultFormData: {},
};

export default EventForm;
