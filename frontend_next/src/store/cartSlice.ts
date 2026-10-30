import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ICar } from "@/shared/types/catalog/car.interface";

const initialState: ICar[] =
  typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("cart") ?? "[]")
    : [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    added: (state, action: PayloadAction<ICar>) => {
      const isAlreadyInCart = state.some((el) => el.id === action.payload.id);

      if (isAlreadyInCart) {
        alert("Already bagged this one, bro!");
      } else {
        state.push(action.payload);
        if (typeof window !== "undefined") {
          localStorage.setItem("cart", JSON.stringify(state));
        }
      }
    },
    deleted: (state, action: PayloadAction<string>) => {
      const actionIndex = state.findIndex((el) => el.id === action.payload);
      if (actionIndex !== -1) {
        state.splice(actionIndex, 1);
        if (typeof window !== "undefined") {
          localStorage.setItem("cart", JSON.stringify(state));
        }
      }
    },
  },
});

export const { added, deleted } = cartSlice.actions;

export default cartSlice.reducer;
