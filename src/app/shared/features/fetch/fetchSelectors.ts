import { RootState } from "@store";
import { emptyState } from "./fetchSlice";

export const selectFetchResult = (key: string) => (state: RootState) => state.fetch[key] ?? emptyState;
