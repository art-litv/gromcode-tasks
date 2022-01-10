import { useState, useEffect } from "react";
import moment from "moment";

import { getWeekStartDate, generateWeekRange } from "../dateUtils.js";

export default function useCurrentWeek(initialDate) {
  const [weekStartDate, setWeekStartDate] = useState(
    getWeekStartDate(initialDate)
  );

  useEffect(() => {
    setWeekStartDate(getWeekStartDate(initialDate));
  }, []);

  const handleNextWeek = () => {
    const newWeekStartDate = moment(weekStartDate).add(1, "weeks").toDate();
    setWeekStartDate(newWeekStartDate);
  };

  const handlePrevWeek = () => {
    const newWeekStartDate = moment(weekStartDate)
      .subtract(1, "weeks")
      .toDate();
    setWeekStartDate(newWeekStartDate);
  };

  const handleWeekReset = () => setWeekStartDate(getWeekStartDate(new Date()));

  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  return [
    weekDates,
    {
      handleNextWeek,
      handlePrevWeek,
      handleWeekReset,
    },
  ];
}
