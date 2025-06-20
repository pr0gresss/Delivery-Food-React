import { createAsyncThunk } from "@reduxjs/toolkit";
import { withAsyncLogger } from "@utils";
import { IFetchArgs } from "./fetchSlice";

export const fetchTypedData = <T>(withLogger = false) =>
  createAsyncThunk<T, IFetchArgs>("fetch/fetchData", async ({ url }: IFetchArgs) => {
    const fetchFn = async () => {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Network error");
      return (await res.json()) as T;
    };

    return withLogger ? withAsyncLogger(fetchFn, "lastApiResponse")() : fetchFn();
  });