import { createStore, combineReducers } from "redux";

import usersReducer from "./users/users.reducer.js";

const appReducer = combineReducers({
  users: usersReducer,
});

export default createStore(appReducer);
