/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IFetchState<T> {
  data: T;
  error: string | null;
  loading: boolean;
}

interface IFetchArgs {
  url: string;
  key: string;
}

interface IFetchRootState {
  [key: string]: IFetchState<any>;
}

export const fetchTypedData = <T>() =>
  createAsyncThunk<T, IFetchArgs>("fetch/fetchData", async ({ url }: IFetchArgs) => {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Network error");
    return (await res.json()) as T;
  });

  
export const emptyState = { date: null, error: null, loading: null };
const initialState: IFetchRootState = {};

const fetchSlice = createSlice({
  name: "fetch",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      (action): action is any =>
        action.type.startsWith("fetch/fetchData") &&
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
