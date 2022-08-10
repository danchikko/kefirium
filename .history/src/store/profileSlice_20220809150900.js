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
			state.myTokens = t
		},
		isValidMyCollections: (state) => {
			state.myCollections = t
		},
		isValidFavoritesNFT: (state) => {
			state.favoritesNFT = t
		},
		isValidFavoritesCollection: (state) => {
			state.favoritesCollection = t
		},
		isValidHidden: (state) => {
			state.hidden = t
		},
		isValidGalleries: (state) => {
			state.galleries = t
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
