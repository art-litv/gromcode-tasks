import { createStore, combineReducers, applyMiddleware } from "redux";

import counterReducer from "./counter/counter.reducer.js";

const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.info("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  console.groupEnd();
  return result;
};

const appReducer = combineReducers({
  counter: counterReducer,
});

export default createStore(appReducer, applyMiddleware(logger));
