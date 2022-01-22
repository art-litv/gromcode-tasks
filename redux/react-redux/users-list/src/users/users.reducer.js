import { ADD_USER, DELETE_USER } from "./users.actions.js";

export default function usersReducer(state = { usersList: [] }, action) {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        usersList: state.usersList.concat(action.payload.userData),
      };
    case DELETE_USER:
      return {
        ...state,
        usersList: state.usersList.filter(
          ({ id }) => id !== action.payload.userId
        ),
      };
    default:
      return state;
  }
}
