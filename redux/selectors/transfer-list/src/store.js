import { createStore, combineReducers } from "redux";

import optionsReducer from "./options/options.reducer.js";

const appReducer = combineReducers({
  options: optionsReducer,
});

export default createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
