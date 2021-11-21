import React, { useState, useEffect } from "react";

const getTimeWithOffset = (offset) => {
  const currentTime = new Date();
  const utcOffset = new Date().getTimezoneOffset() / 60;
  return new Date(
    currentTime.setHours(currentTime.getHours() + offset + utcOffset)
  );
};

export default function Clock({ location, offset }) {
  const [date, setDate] = useState(getTimeWithOffset(offset));

  useEffect(() => {
    const interval = setInterval(
      () => setDate(getTimeWithOffset(offset)),
      1000
    );

    return () => {
      clearInterval(interval);
    };
  }, [offset]);

  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{date.toLocaleTimeString()}</div>
    </div>
  );
}
