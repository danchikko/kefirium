import { createSlice } from '@reduxjs/toolkit'

const profileSlice = createSlice({
	name: 'profile',
	initialState: {
		Own: false,
		myTokens: false,
		myCollections: false,
		favoritesNFT: false,
		favoritesCollection: false,
		hidden: false,
		galleries: false,
	},
	reducers: {
		isValidOwn: (state) => {
			state.Own = true
            state.myTokens = false
            state.myCollections = false
            state.favoritesNFT = false
            state.favoritesCollection = false
            state.hidden = false
            state.galleries = false
		},
		isValidMyTokens: (state) => {
			state.myTokens = tr
		},
		isValidMyCollections: (state) => {
			state.myCollections = tr
		},
		isValidFavoritesNFT: (state) => {
			state.favoritesNFT = tr
		},
		isValidFavoritesCollection: (state) => {
			state.favoritesCollection = tr
		},
		isValidHidden: (state) => {
			state.hidden = tr
		},
		isValidGalleries: (state) => {
			state.galleries = tr
		},
	},
})

export const {
	isValidOwn,
	isValidMyTokens,
	isValidMyCollections,
	isValidFavoritesNFT,
	isValidFavoritesCollection,
	isValidHidden,
	isValidGalleries,
} = profileSlice.actions

export default profileSlice.reducer
