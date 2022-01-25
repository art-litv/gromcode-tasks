export const SET_FILTER_TEXT = "USERS/SET_FILTER_TEXT";

export const setFilterText = (newText) => ({
  type: SET_FILTER_TEXT,
  payload: {
    newText,
  },
});
