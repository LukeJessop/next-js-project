import { createSlice } from "@reduxjs/toolkit";

const pastSlice = createSlice({
  name: "past",
  initialState: [],
  reducers: {
    addToPast: (state, action) => {
      for(let i = 0; i < action.payload.length; i++){
        if(action.payload.length !== 0 && state.length < action.payload.length){
          state.push(action.payload[i]);
        }
      }
    },
    removeFromPast: (state) => {
      state.pop();
    },
    removeAllFromPast: (state) => {
      state = []
    }
  }
});


export const pastActions = pastSlice.actions;

export default pastSlice;
