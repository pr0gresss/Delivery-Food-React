import { authReducer } from "@features/auth";
import { cartReducer } from "@features/cart";
import { fetchReducer } from "@features/fetch";
import { themeReducer } from "@features/theme";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    fetch: fetchReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
