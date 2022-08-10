import optionsSlice from "./optionsSlice"
import { configureStore } from "@reduxjs/toolkit"
import postsSlice from "./postsSlice"
import registerSlice from "./registerSlice"

const store = configureStore({
    reducer: {
        options: optionsSlice,
        posts: postsSlice,
        register: registerSlice,
        
    }
})

export default store