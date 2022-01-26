import { USER_DATA_RECIEVED, SHOW_SPINNER } from "./users.actions";

const initialState = {
  userData: null,
  isFetching: false,
};

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_SPINNER:
      return {
        ...state,
        isFetching: true,
      };
    case USER_DATA_RECIEVED:
      return {
        ...state,
        userData: action.payload.userData,
        isFetching: false,
      };
    default:
      return state;
  }
}
