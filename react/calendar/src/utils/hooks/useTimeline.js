import { useState, useEffect } from "react";

import { getDayMinutes } from "../../utils/dateUtils";

export default function useTimeline(timeout) {
  const [timelineMT, setTimelineMT] = useState(getDayMinutes(new Date()));

  useEffect(() => {
    const interval = setInterval(
      () => setTimelineMT(getDayMinutes(new Date())),
      timeout
    );
    return () => clearInterval(interval);
  }, [timeout]);

  return timelineMT;
}
