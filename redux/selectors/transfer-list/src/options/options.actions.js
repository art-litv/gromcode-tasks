export const TOGGLE_OPTION = "OPTIONS/TOGGLE_OPTION";

export const toggleOption = (optionId) => ({
  type: TOGGLE_OPTION,
  payload: {
    optionId,
  },
});
