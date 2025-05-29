import { useEffect, useState } from 'react';
import { ICartItem, IProduct } from '@interfaces';

export interface ICartContext {
  cart: ICartItem[];
  addToCart: (product: IProduct, amount?: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CART_KEY = 'cart_items';

export const useCart = () => {
  const loadCartFromStorage = () => {
      const localStorageCart = localStorage.getItem(CART_KEY);
      if (localStorageCart) {
        return JSON.parse(localStorageCart) as ICartItem[];
      }
      return [];
    };
  
    const [cart, setCart] = useState<ICartItem[]>(loadCartFromStorage);
  
    useEffect(() => {
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
    }, [cart]);
  
    const addToCart = (product: IProduct, amount: number = 1) => {
      setCart(prev => {
        const existing = prev.find(item => item.product.id === product.id);
        if (existing) {
          return prev.map(item =>
            item.product.id === product.id
              ? { ...item, amount: item.amount + amount }
              : item
          );
        } else {
          return [...prev, { product, amount }];
        }
      });
    };
  
    const removeFromCart = (productId: string) => {
      setCart(prev => prev.filter(item => item.product.id !== productId));
    };
  
    const clearCart = () => {
      setCart([]);
    };
  
    const totalItems = cart.reduce((sum, item) => sum + item.amount, 0);
    const totalPrice = cart.reduce(
      (sum, item) => sum + item.amount * item.product.price,
      0
    );

    return {
      cart,
			addToCart,
			removeFromCart,
			clearCart,
			totalItems,
			totalPrice,
    };
};
