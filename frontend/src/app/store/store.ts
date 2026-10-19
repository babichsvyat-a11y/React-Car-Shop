import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/features/Cart/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

const sendToLocalStorage = () => {
  const value: string = JSON.stringify(store.getState().cart);
  window.localStorage.setItem("cart", value);
};

store.subscribe(sendToLocalStorage);
