import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/store/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

const sendToLocalStorage = () => {
  if (typeof window !== "undefined") {
    const value: string = JSON.stringify(store.getState().cart);
    window.localStorage.setItem("cart", value);
  }
};

if (typeof window !== "undefined") {
  store.subscribe(sendToLocalStorage);
}
