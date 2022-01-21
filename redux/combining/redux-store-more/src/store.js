import { createStore, combineReducers } from "redux";

import userReducer from "./user.reducer.js";
import cartReducer from "./cart.reducer.js";
import languageReducer from "./language.reducer.js";

const appReducer = combineReducers({
  language: languageReducer,
  user: userReducer,
  cart: cartReducer,
});

export default createStore(appReducer);
