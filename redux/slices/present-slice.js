import { createSlice } from "@reduxjs/toolkit";

const presentSlice = createSlice({
  name: "present",
  initialState: [],
  reducers: {
    addToPresent: (state, action) => {
      state.push(action.payload[action.payload.length - 1]);
    },
    removeFromPresent: (state) => {
      state.pop();
    }
  }
});

//present stack and past stack
//undo button should move from present to past
//redo should move from past to present

//two db tables past/present

export const presentActions = presentSlice.actions;

export default presentSlice;
