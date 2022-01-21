import { ADD_USER, DELETE_USER } from "./users.actions.js";

export default function usersReducer(state = { usersList: [] }, action) {
  const { payload } = action;
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        usersList: state.usersList.concat(payload.userData),
      };
    case DELETE_USER:
      return {
        ...state,
        usersList: state.usersList.filter(({ id }) => id !== payload.userId),
      };
    case UPDATE_USER:
      return {
        ...state,
        usersList: state.usersList.map((user) =>
          user.id === payload.userId ? { ...user, ...payload.userData } : user
        ),
      };
    default:
      return state;
  }
}
