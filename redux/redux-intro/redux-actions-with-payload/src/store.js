import { createStore } from "redux";

import usersReducer from "./users.reducer";

export default createStore(usersReducer);
