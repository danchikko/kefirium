import { createSlice } from '@reduxjs/toolkit'

export const optionsSlice = createSlice({
	name: 'options',
	initialState: {
		sorted: '',
		all: '',
		categoriesModal: false,
		supportModal: false,
	},
	reducers: {
		sortedPost: (state, action) => {
			state.sorted = action.payload
		},
		modalCategories: (state) => {
			state.categoriesModal = !state.categoriesModal
		},
		closeCategoriesModal: (state, action) => {
			state.categoriesModal = action.payload
		},
		modalSupport: (state) => {
			state.supportModal = !state.supportModal
		},
		closeSupportModal: (state) => {
			state.supportModal = false
		},
		
	},
})

export const {
	sortedPost,
	modalCategories,
	closeCategoriesModal,
	modalSupport,
	closeSupportModal,
} = optionsSlice.actions
export default optionsSlice.reducer
