export const SET_USER = "USER/SET_USER";
export const REMOVE_USER = "USER/REMOVE_USER";

export const setUser = (user) => ({
  type: SET_USER,
  payload: {
    user,
  },
});

export const removeUser = () => ({
  type: REMOVE_USER,
});
