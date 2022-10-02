import { createSlice } from "@reduxjs/toolkit";

const presentSlice = createSlice({
  name: "present",
  initialState: [],
  reducers: {
    addToPresent: (state, action) => {
      if(typeof(action.payload) == 'string'){
        state.push(action.payload);
      }
      for(let i = 0; i < action.payload.length; i++){
        if(state.length < action.payload.length){
          state.push(action.payload[i]);
        }
      }
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
