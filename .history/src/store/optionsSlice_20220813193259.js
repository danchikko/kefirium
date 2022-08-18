import { createSlice } from '@reduxjs/toolkit'
import { startTransition } from 'react'

export const optionsSlice = createSlice({
	name: 'options',
	initialState: {
		sorted: '',
		all: false,
		art: false,
		sport: false,
		music: false,
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
			state.all = true
			state.art = false
			state.sport = false
			state.music = false
			state.photo = false
			state.collectibles = false
			state.virtualworlds = false
		},
		artClick: (state) => {
			state.sorted = 'art'
			state.all = false
			state.art = true
			state.sport = false
			state.music = false
			state.photo = false
			state.collectibles = false
			state.virtualworlds = false
		},
		sportClick: (state) => {
			state.sorted = 'sport'
			state.all = false
			state.art = false
			startTransition
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