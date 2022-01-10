import React from "react";
import PropTypes from "prop-types";

import useTimeline from "../../utils/hooks/useTimeline";

import "./timeline.scss";

function Timeline({ timeout }) {
  let marginTop = useTimeline(timeout);

  marginTop -= 5; // subtract .time__line height

  return (
    <div style={{ marginTop }} className="timeline">
      <div className="timeline__circle" />
      <div className="timeline__line" />
    </div>
  );
}

Timeline.propTypes = {
  timeout: PropTypes.number,
};

Timeline.defaultProps = {
  timeout: 60 * 1000,
};

export default Timeline;
