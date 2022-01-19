import React, { useState } from "react";

import { themes, ThemeContext } from "./themes";

import "./index.scss";

function App() {
  const [theme, setTheme] = useState(themes.light);

  const switchTheme = () => {
    const newTheme = theme === themes.dark ? themes.light : themes.dark;
    setTheme(newTheme);
  };

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <ThemedButton text={"Context button"} onClick={switchTheme} />
      </ThemeContext.Provider>
      <ThemedButton text={"Default button"} />
    </>
  );
}

export default App;
