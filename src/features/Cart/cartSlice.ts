import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ITotalAuto } from "@/shared/interface/totalAuto.interface";

const initialState: ITotalAuto[] = JSON.parse(
  localStorage.getItem("cart") ?? "[]",
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    added: (state, action: PayloadAction<ITotalAuto>) => {
      const nonRep = state.some((el) => el.id === action.payload.id);
      nonRep
        ? alert("Already bagged this one, bro!")
        : state.push(action.payload);
    },
    deleted: (state, action: PayloadAction<number>) => {
      const actionIndex = state.findIndex((el) => el.id === action.payload);
      if (actionIndex !== -1) {
        state.splice(actionIndex, 1);
      }
    },
  },
});

export const { added, deleted } = cartSlice.actions;

export default cartSlice.reducer;
