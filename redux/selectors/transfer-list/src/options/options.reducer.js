import { TOGGLE_OPTION } from "./options.actions.js";
import { options } from "../options";

const initialState = {
  optionsList: options,
  selected: [],
};

export default function optionsReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_OPTION:
      const { optionId } = action.payload;
      const newSelected = state.selected.includes(optionId)
        ? state.selected.filter((selectedId) => selectedId !== optionId)
        : state.selected.concat(optionId);
      return {
        ...state,
        selected: newSelected,
      };
    default:
      return state;
  }
}
