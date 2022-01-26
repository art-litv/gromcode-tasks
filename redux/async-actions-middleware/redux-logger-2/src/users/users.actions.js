export const USER_DATA_RECIEVED = "USERS/USER_DATA_RECIEVED";
export const SHOW_SPINNER = "USERS/SHOW_SPINNER";

import UsersAPI from "../api";

export const showSpinner = () => ({
  type: SHOW_SPINNER,
});

export const userDataReceived = (userData) => ({
  type: USER_DATA_RECIEVED,
  payload: {
    userData,
  },
});

export const fetchUsers = (userId) => async (dispatch) => {
  dispatch(showSpinner());
  const userData = await UsersAPI.fetchUser(userId);
  dispatch(userDataReceived(userData));
};
