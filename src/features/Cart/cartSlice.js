import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("cart")) ?? [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    added: (state, action) => {
      const nonRep = state.some((el) => el.id === action.payload.id);
      nonRep
        ? alert("Already bagged this one, bro!")
        : state.push(action.payload);
    },
    deleted: (state, action) => {
      const actionID = (el) => el.id === action.payload;
      const actionIndex = state.findIndex(actionID);
      state.splice(actionIndex, 1);
    },
  },
});

export const { added, deleted } = cartSlice.actions;

export default cartSlice.reducer;
