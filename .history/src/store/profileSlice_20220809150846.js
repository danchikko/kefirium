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
		isValidMyTokens: (state, ) => {
			state.myTokens = action.payload
		},
		isValidMyCollections: (state, ) => {
			state.myCollections = action.payload
		},
		isValidFavoritesNFT: (state, ) => {
			state.favoritesNFT = action.payload
		},
		isValidFavoritesCollection: (state, ) => {
			state.favoritesCollection = action.payload
		},
		isValidHidden: (state, ) => {
			state.hidden = action.payload
		},
		isValidGalleries: (state, ) => {
			state.galleries = action.payload
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
