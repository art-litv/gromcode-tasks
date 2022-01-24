import { createStore, combineReducers } from "redux";

import optionsReducer from "./options/options.reducer.js";

const appReducer = combineReducers({
  options: optionsReducer,
});

export default createStore(appReducer);
