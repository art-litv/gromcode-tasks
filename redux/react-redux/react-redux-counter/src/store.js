import { createStore, combineReducers } from "redux";

import counterReducer from "./counter/counter.reducer.js";

export default createStore(counterReducer);
