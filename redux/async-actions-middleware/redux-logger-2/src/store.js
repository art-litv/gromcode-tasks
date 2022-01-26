import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import usersReducer from "./users/users.reducer";

const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.info("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  console.groupEnd();
  return result;
};

const appReducer = combineReducers({
  users: usersReducer,
});

export default createStore(appReducer, applyMiddleware(thunk, logger));
