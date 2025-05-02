import { withLogging } from '@utils';

export const useFetch = () => {
	const fetchData = async <T>(url: string): Promise<T> => {
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error("Can't establish connection with API.");
		}

		return await response.json();
	};

	const fetchDataWithLogging = async <T>(url: string) => {
		return await withLogging<T>(fetchData)(url);
	};

	return { fetchData, fetchDataWithLogging };
};
