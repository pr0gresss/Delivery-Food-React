/* eslint-disable @typescript-eslint/no-explicit-any */
import { setLocalValue } from "./localStorageHelpers";

export function withAsyncLogger<T>(
  asyncFn: (...args: any[]) => Promise<T>,
  storageKey: string
): (...args: any[]) => Promise<T> {
  return async (...args: any[]) => {
    try {
      const result = await asyncFn(...args);
      setLocalValue(storageKey, JSON.stringify(result));
      return result;
    } catch (error) {
      console.error("Error in wrapped async function:", error);
      throw error;
    }
  };
}
