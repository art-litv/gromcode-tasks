import React, { useState } from "react";

export default function Counter() {
  const [value, setValue] = useState(0);

  return (
    <div className="counter">
      <button className="counter__button" onClick={() => setValue(value - 1)}>
        -
      </button>
      <span className="counter__value" onClick={() => setValue(0)}>
        {value}
      </span>
      <button className="counter__button" onClick={() => setValue(value + 1)}>
        +
      </button>
    </div>
  );
}
