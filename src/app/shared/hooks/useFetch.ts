import { withAsyncLogger } from "@utils";
import { useEffect, useState, useCallback, useMemo } from "react";

export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Network response was not ok");

      const result: T = await response.json();
      setData(result);
      return result;
    } catch (err: unknown) {
      setError(err as Error);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [url]);

  const fetchDataWithLogging = useMemo(() => {
    return withAsyncLogger(fetchData, 'lastApiResponse');
  }, [fetchData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, error, loading, fetchData, fetchDataWithLogging };
};
