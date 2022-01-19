import React, { useState } from "react";

import Header from "./Header";

import { user, UserContext } from "./user";

import "./index.scss";

function App() {
  const [userData, setUser] = useState(user);

  return (
    <div className="page">
      <UserContext.Provider value={userData}>
        <Header />
      </UserContext.Provider>
    </div>
  );
}

export default App;
