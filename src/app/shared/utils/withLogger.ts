export const withLogging = <T>(fn: (url: string) => Promise<T>) => {
  return async (url: string): Promise<T> => {
    const data: T = await fn(url);
    try {
      const logEntry = {
        url,
        timestamp: new Date().toISOString(),
        data,
      };
      localStorage.setItem('lastApiResponse', JSON.stringify(logEntry));
      console.log('Logged response:', logEntry);
    } catch (logError) {
      console.warn('Logging failed:', logError);
    }
    return data;
  };
};
