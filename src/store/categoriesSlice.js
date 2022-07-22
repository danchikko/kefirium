import { createSlice } from '@reduxjs/toolkit'

export const categoriesSlice = createSlice({
	name: 'categories',
	initialState: {
        sorted: ''
    },
    reducers: {
        sortedPost: (state, action) => {
            state.sorted = action.payload
        }
    }
})

export const {sortedPost} = categoriesSlice.actions
export default categoriesSlice.reducer
