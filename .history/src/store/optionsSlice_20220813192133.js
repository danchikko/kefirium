import { createSlice } from '@reduxjs/toolkit'

export const optionsSlice = createSlice({
	name: 'options',
	initialState: {
		sorted: '',
		all: false,
		art: false,
		sport: false,
		musice: false,
		photo: false,
		collectibles: false,
		virtualworlds: false,
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
		allClick: (state) => {
			state.sorted = 'all'
			state.all = true,
			state.all = false,
			state
		}
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
