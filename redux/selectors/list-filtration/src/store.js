import { createStore, combineReducers } from "redux";

import usersReducer from "./users/users.reducer.js";

const appReducer = combineReducers({
  users: usersReducer,
});

export default createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
