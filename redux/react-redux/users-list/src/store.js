import { createStore, combineReducers } from "redux";

import counterReducer from "./counter/counter.reducer.js";
import usersReducer from "./users/users.reducer.js";

const appReducer = combineReducers({
  counter: counterReducer,
  users: usersReducer,
});

export default createStore(appReducer);
