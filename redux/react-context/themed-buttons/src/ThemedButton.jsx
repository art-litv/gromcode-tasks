import React, { useContext } from "react";

import { ThemeContext } from "./themes";

function ThemedButton({ text, onClick }) {
  const theme = useContext(ThemeContext);
  return (
    <button onClick={onClick} style={theme} className="btn">
      {text}
    </button>
  );
}

export default ThemedButton;
