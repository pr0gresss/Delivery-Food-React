import { ICartItem } from "@interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadCartFromStorage, saveCartToStorage } from "@utils";

interface ICartState {
  items: ICartItem[];
}

const initialState: ICartState = {
  items: loadCartFromStorage(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<ICartItem>) {
      const { product, amount = 1 } = action.payload;
      const existing = state.items.find((item) => item.product.id === product.id);

      if (existing) {
        existing.amount += amount;
      } else {
        state.items.push({ product, amount });
      }

      saveCartToStorage(state.items);
    },
    removeFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.product.id !== action.payload);
      saveCartToStorage(state.items);
    },
    clearCart(state) {
      state.items = [];
      saveCartToStorage([]);
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
