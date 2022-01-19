import React, { useContext } from "react";

import React from "react";

function ThemedButton({ text, onClick }) {
  const theme = useContext(ThemeContext);
  return (
    <button onClick={onClick} style={theme}>
      {text}
    </button>
  );
}

export default ThemedButton;
