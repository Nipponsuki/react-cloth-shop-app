import { TYPES } from "redux/types";

export const setCurrentUser = user => {
  return {
    type: TYPES.SET_CURRENT_USER,
    user
  };
};
