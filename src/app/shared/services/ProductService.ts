import { IProduct } from "@interfaces";


export class ProductService {
  public async getProducts(): Promise<IProduct[]> {
    try {
      const response = await fetch("https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals");
      
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching product data:", error);
      throw error;
    }
  }
}