import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import tasksReducer from "./reducers/tasks.reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const appReducer = combineReducers({
  tasks: tasksReducer,
});

export default createStore(
  appReducer,
  composeEnhancers(applyMiddleware(thunk))
);
