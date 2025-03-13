import { TCategory } from "@types";

export interface IProduct {
  id: string,
  meal: string,
  category: TCategory,
  area: string,
  instructions: string,
  img: string,
  price: number,
};