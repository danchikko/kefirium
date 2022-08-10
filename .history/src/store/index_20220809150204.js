import optionsSlice from "./optionsSlice"
import { configureStore } from "@reduxjs/toolkit"
import postsSlice from "./postsSlice"
import registerSlice from "./registerSlice"
import profileSlice from "./profileSlice"

const store = configureStore({
    reducer: {
        options: optionsSlice,
        posts: postsSlice,
        register: registerSlice,
        profile: profileSlice,
    }
})

export default store