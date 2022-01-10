import React from "react";
import PropTypes from "prop-types";

import "./error.scss";

export default function Error({ text }) {
  return <div className="error">{text}</div>;
}

Error.propTypes = {
  text: PropTypes.string.isRequired,
};
