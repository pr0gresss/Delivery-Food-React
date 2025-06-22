import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, resetPassword, signUp } from "./authThunks";
import { IUser } from "@interfaces";
import { AUTH_KEY, setLocalValue } from "@utils";

interface AuthState {
  currentUser: IUser | null;
  error: string | null;
}

const initialState: AuthState = {
  currentUser: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      state.currentUser = action.payload;
      if (state.currentUser !== null) {
        setLocalValue<string>(AUTH_KEY, action.payload.uid);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.currentUser = action.payload;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.error = action.payload as string;
      })
      .addCase(logIn.pending, (state) => {
        state.error = null;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.currentUser = action.payload;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.error = action.payload as string;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.currentUser = null;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
