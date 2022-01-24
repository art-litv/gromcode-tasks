import { GO_NEXT, GO_PREV } from "./users.actions.js";
import { users } from "../users.js";

export default function usersReducer(
  state = { usersList: users, currentPage: 0 },
  action
) {
  switch (action.type) {
    case GO_NEXT:
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    case GO_PREV:
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };
    default:
      return state;
  }
}
