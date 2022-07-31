import categoriesSlice from "./categoriesSlice"
import { configureStore } from "@reduxjs/toolkit"
import postsSlice from "./postsSlice"

const store = configureStore({
    reducer: {
        categories: categoriesSlice,
        posts: postsSlice,
    }
})

export default store