import { SET_FILTER_TEXT } from "./users.actions";
import { users } from "../users";

const initialState = {
  filterText: "",
  usersList: users,
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FILTER_TEXT:
      return {
        ...state,
        filterText: action.payload.newText,
      };
    default:
      return state;
  }
}
