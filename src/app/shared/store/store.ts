import { configureStore } from "@reduxjs/toolkit";
import { authReducer, cartReducer, fetchReducer } from "@slices";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    fetch: fetchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
