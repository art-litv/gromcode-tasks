import store from "./store.js";

import { addUser, deleteUser, updateUser } from "./users.actions.js";
import { increment, decrement, reset } from "./counter.actions.js";

store.subscribe(() => console.log(store.getState()));

store.dispatch(addUser({ id: 76, name: "Sarah" }));
store.dispatch(updateUser(76, { name: "Another name" }));
store.dispatch(deleteUser(76));

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(reset());
