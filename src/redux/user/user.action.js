import userActionTypes from "./user.types";

export const setCurrentUser = user => ({
    type: userActionTypes.SETCURRENTUSER,
    payload: user
});