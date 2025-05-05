import { IProduct } from '@interfaces';

export const getProducts = async (): Promise<IProduct[]> => {
	try {
		const response = await fetch(
			'https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals'
		);

		if (!response.ok) {
			throw new Error("Can't establish connection with API.");
		}

		const data: IProduct[] = await response.json();
		return data;
	} catch (error) {
		console.error('Error fetching product data:', error);
		throw error;
	}
};
