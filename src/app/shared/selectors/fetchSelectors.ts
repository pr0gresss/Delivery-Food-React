import { emptyState } from "@slices";
import { RootState } from "@store";

export const selectFetchResult = (key: string) => (state: RootState) => state.fetch[key] ?? emptyState;
