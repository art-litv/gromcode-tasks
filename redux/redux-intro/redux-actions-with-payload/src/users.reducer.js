export default function usersReducer(state = { usersList: [] }, action) {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        usersList: state.usersList.concat(action.payload),
      };
    case "DELETE_USER":
      return {
        ...state,
        usersList: state.usersList.filter(({ id }) => id !== action.payload),
      };
    default:
      return state;
  }
}
