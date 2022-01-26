import React from "react";
import { connect } from "react-redux";

import { counterSelector } from "./counter/counter.selectors";
import { increment, decrement, reset } from "./counter/counter.actions";

const Counter = ({ value, onIncrease, onDecrease, onReset }) => {
  return (
    <div class="counter">
      <button class="counter__button" onClick={onDecrease}>
        -
      </button>
      <span class="counter__value" onClick={onReset}>
        {value}
      </span>
      <button class="counter__button" onClick={onIncrease}>
        +
      </button>
    </div>
  );
};

const mapState = (state) => ({
  value: counterSelector(state),
});

const mapDispatch = {
  onIncrease: increment,
  onDecrease: decrement,
  onReset: reset,
};

export default connect(mapState, mapDispatch)(Counter);
