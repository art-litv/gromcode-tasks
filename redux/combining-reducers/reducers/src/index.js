import store from "./store.js";
import { addUser, deleteUser } from "./users.actions.js";

store.subscribe(() => console.log(store.getState()));
