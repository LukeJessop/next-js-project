import { createSlice } from "@reduxjs/toolkit";

const textArraySlice = createSlice({
  name: "text",
  initialState: [],
  reducers: {
    addText: (state, action) => {
        const newTextItem = action.payload
        state.push({
            text: newTextItem.text,
            id: newTextItem.id 
        })
    }
  }
});

export const textArrayActions = textArraySlice.actions

export default textArraySlice