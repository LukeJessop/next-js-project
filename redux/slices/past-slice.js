import { createSlice } from "@reduxjs/toolkit";

const pastSlice = createSlice({
  name: "past",
  initialState: [],
  reducers: {
    addToPast: (state, action) => {
      state = action.payload;
    },
    removeFromPast: (state) => {
      state.pop();
    }
  }
});


export const pastActions = pastSlice.actions;

export default pastSlice;
