import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import weatherReducer from "./weather/weather.reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const appReducer = combineReducers({
  cities: weatherReducer,
});

export default createStore(
  appReducer,
  composeEnhancers(applyMiddleware(thunk))
);
