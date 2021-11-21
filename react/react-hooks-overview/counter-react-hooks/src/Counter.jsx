import React, { useState } from "react";

export default function Counter() {
  const [value, setValue] = useState(0);

  return (
    <div class="counter">
      <button class="counter__button" onClick={() => setValue(value - 1)}>
        -
      </button>
      <span class="counter__value" onClick={() => setValue(0)}>
        {value}
      </span>
      <button class="counter__button" onClick={() => setValue(value + 1)}>
        +
      </button>
    </div>
  );
}
