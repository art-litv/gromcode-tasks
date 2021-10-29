import React from "react";

import Mailbox from "./Mailbox.jsx";

export default function App() {
  return (
    <div className="app">
      <Mailbox unreadMessages={["sgsdaggd", "sdgdsgsdgds"]} />
    </div>
  );
}
