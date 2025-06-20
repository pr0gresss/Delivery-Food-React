/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "@services";
import { mapFirebaseUserToUser } from "@utils";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from "firebase/auth";

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