/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth } from "@services";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";

interface IUser {
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

const mapFirebaseUserToUser = (user: User): IUser => ({
  email: user.email,
  displayName: user.displayName,
  photoURL: user.photoURL,
});

interface AuthState {
  currentUser: IUser | null;
  error: string | null;
}

const initialState: AuthState = {
  currentUser: null,
  error: null,
};

export const signUp = createAsyncThunk(
  "auth/signUp",
  async ({ email, password }: { email: string; password: string }, thunkAPI) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      return mapFirebaseUserToUser(userCredential.user);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/logIn",
  async ({ email, password }: { email: string; password: string }, thunkAPI) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return mapFirebaseUserToUser(userCredential.user);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logOut", async (_, thunkAPI) => {
  try {
    await signOut(auth);
    return null;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const resetPassword = createAsyncThunk("auth/resetPassword", async (email: string, thunkAPI) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      state.currentUser = action.payload;
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
