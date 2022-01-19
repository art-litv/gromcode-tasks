import React, { useState } from "react";

import Header from "./Header";

import { userData, UserContext } from "./user";

import "./index.scss";

function App() {
  const [user, setUser] = useState(userData);

  return (
    <div className="page">
      <UserContext.Provider value={user}>
        <Header />
      </UserContext.Provider>
    </div>
  );
}

export default App;
