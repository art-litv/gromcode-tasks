import { createSelector } from "reselect";

export const usersListSelector = (state) => state.users.usersList;
export const filterTextSelector = (state) => state.users.filterText;

export const filteredUsersSelector = createSelector(
  [usersListSelector, filterTextSelector],
  (usersList, filterText) =>
    usersList.filter(({ name }) => name.toLowerCase().includes(filterText))
);
