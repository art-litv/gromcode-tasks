import { TASKS_DATA_RECEIVED } from "../actions/tasks.actions";

const initialState = {
  tasksList: [],
};

export default function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case TASKS_DATA_RECEIVED:
      return {
        ...state,
        tasksList: action.payload.tasksData,
      };
    default:
      return state;
  }
}
