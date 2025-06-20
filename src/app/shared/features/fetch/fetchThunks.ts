import { createAsyncThunk } from "@reduxjs/toolkit";
import { withAsyncLogger } from "@utils";
import { IFetchArgs } from "./fetchSlice";

interface IPostArgs<T> {
  url: string;
  key: string;
  payload: T;
}

export const fetchTypedData = <T>(withLogger = false) =>
  createAsyncThunk<T, IFetchArgs>("fetch/fetchData", async ({ url }: IFetchArgs) => {
    const fetchFn = async () => {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Network error");
      return (await res.json()) as T;
    };

    return withLogger ? withAsyncLogger(fetchFn, "lastApiResponse")() : fetchFn();
  });

export const postTypedData = <TResponse, TPayload>(withLogger = false) =>
  createAsyncThunk<TResponse, IPostArgs<TPayload>>(
    "fetch/postData",
    async ({ url, payload }: IPostArgs<TPayload>) => {
      const postFn = async () => {
        const res = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        return (await res.json()) as TResponse;
      };

      return withLogger ? withAsyncLogger(postFn, "lastPostResponse")() : postFn();
    }
  );
