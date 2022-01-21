import { createStore, combineReducers } from "redux";

import usersReducer from "./users.reducer";
import counerReducer from "./counter.reducer";

export default createStore(combineReducers(counerReducer, usersReducer));
