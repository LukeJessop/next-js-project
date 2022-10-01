import {configureStore} from '@reduxjs/toolkit'
import presentSlice from './slices/present-slice'
import pastSlice from './slices/past-slice'

const store = configureStore({
    reducer: {
        present: presentSlice.reducer, 
        past: pastSlice.reducer}
})

export default store