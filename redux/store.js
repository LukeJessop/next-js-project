import {configureStore} from '@reduxjs/toolkit'
import textArraySlice from './slices/text-array-slice'

const store = configureStore({
    reducer: textArraySlice.reducer
})

export default store