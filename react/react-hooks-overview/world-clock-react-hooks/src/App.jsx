import React, { useState } from "react";

import Clock from "./Clock.jsx";

export default function App() {
  const [isOpened, setOpened] = useState(true);

  return (
    <>
      <button className="switch-btn" onClick={() => setOpened(!isOpened)}>
        {isOpened ? "Hide" : "Show"}
      </button>
      {isOpened && (
        <>
          <Clock location="London" offset={0} />
          <Clock location="Kyiv" offset={2} />
          <Clock location="New York" offset={-5} />
        </>
      )}
    </>
  );
}
