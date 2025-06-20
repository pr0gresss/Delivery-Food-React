/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";

export interface IFetchState<T> {
  data: T;
  error: string | null;
  loading: boolean;
}

export interface IFetchArgs {
  url: string;
  key: string;
}

export interface IFetchRootState {
  [key: string]: IFetchState<any>;
}

export const emptyState = { date: null, error: null, loading: null };
const initialState: IFetchRootState = {};

const fetchSlice = createSlice({
  name: "fetch",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      (action): action is any =>
        /^fetch\/(fetchData|postData)/.test(action.type) &&
        ["pending", "fulfilled", "rejected"].some((s) => action.type.endsWith(s)),
      (state, action) => {
        const key = action.meta.arg.key;

        if (action.type.endsWith("/pending")) {
          state[key] = { data: null, loading: true, error: null };
        }

        if (action.type.endsWith("/fulfilled")) {
          state[key] = { data: action.payload, loading: false, error: null };
        }

        if (action.type.endsWith("/rejected")) {
          state[key] = {
            data: null,
            loading: false,
            error: action.error.message || "Unknown error",
          };
        }
      }
    );
  },
});

export default fetchSlice.reducer;
