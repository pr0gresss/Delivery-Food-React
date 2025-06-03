import { RootState } from "../store";

export const selectCurrentUser = (state: RootState) => state.auth.currentUser;
export const selectAuthError = (state: RootState) => state.auth.error;
