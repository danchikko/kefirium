import categoriesSlice from "./categoriesSlice"
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
    reducer: {
        categories: categoriesSlice
    }
})

export default store