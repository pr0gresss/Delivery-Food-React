import { ICartItem } from "@interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getLocalValue, setLocalValue, CART_KEY } from "@utils";

interface ICartState {
  items: ICartItem[];
}

const initialState: ICartState = {
  items: JSON.parse(getLocalValue(CART_KEY) ?? ""),
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

      setLocalValue(CART_KEY, JSON.stringify(state.items));
    },
    removeFromCart(state, action: PayloadAction<ICartItem>) {
      state.items = state.items.filter((item) => item.product.id !== action.payload.product.id);
      setLocalValue(CART_KEY, JSON.stringify(state.items));
    },
    updateCartItemAmount(state, action: PayloadAction<ICartItem>) {
      const { product, amount } = action.payload;
      const existingItem = state.items.find((item) => item.product.id === product.id);

      if (!existingItem) return;

      existingItem.amount = amount;

      setLocalValue(CART_KEY, JSON.stringify(state.items));
    },
    clearCart(state) {
      state.items = [];
      setLocalValue(CART_KEY, []);
    },
  },
});

export const { addToCart, removeFromCart, clearCart, updateCartItemAmount } = cartSlice.actions;
export default cartSlice.reducer;
