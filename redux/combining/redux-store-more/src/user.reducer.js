import { SET_USER, REMOVE_USER } from "./user.actions.js";

export default function userReducer(state = null, action) {
  switch (action.type) {
    case SET_USER:
      return action.payload.user;
    case REMOVE_USER:
      return null;
    default:
      return state;
  }
}
