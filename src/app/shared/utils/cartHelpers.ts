import { ICartItem } from "@interfaces";

export const CART_KEY = "cart_items";

export const loadCartFromStorage = (): ICartItem[] => {
  const stored = localStorage.getItem(CART_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const saveCartToStorage = (cart: ICartItem[]) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};