import { createStore, combineReducers } from "redux";

import usersReducer from "./users.reducer.js";
import counterReducer from "./counter.reducer.js";

const appReducer = combineReducers({
  counter: counterReducer,
  users: usersReducer,
});

export default createStore(appReducer);
