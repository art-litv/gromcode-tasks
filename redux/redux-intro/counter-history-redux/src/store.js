import { createStore } from "redux";

const INCREMENT = "COUNTER/INCREMENT";
const RESET = "COUNTER/RESET";
const DECREMENT = "COUNTER/DECREMENT";

export const increment = () => ({
  type: INCREMENT,
});

export const reset = () => ({
  type: RESET,
});

export const decrement = () => ({
  type: DECREMENT,
});

const initialState = {
  history: [],
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        history: state.history.concat(1),
      };
    case RESET:
      return {
        ...state,
        history: [],
      };
    case DECREMENT:
      return {
        ...state,
        history: state.history.concat(-1),
      };
    default:
      return state;
  }
};

export const store = createStore(counterReducer);
