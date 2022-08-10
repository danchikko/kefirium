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
            state.Own = false
            state.myTokens = false
            state.myCollections = false
            state.favoritesNFT = false
            state.favoritesCollection = false
            state.hidden = false
            state.galleries = false
		},
		isValidMyCollections: (state) => {
            state.Own = true
            state.myTokens = false
            state.myCollections = false
            state.favoritesNFT = false
            state.favoritesCollection = false
            state.hidden = false
            state.galleries = false
		},
		isValidFavoritesNFT: (state) => {
            state.Own = true
            state.myTokens = false
            state.myCollections = false
            state.favoritesNFT = false
            state.favoritesCollection = false
            state.hidden = false
            state.galleries = false
		},
		isValidFavoritesCollection: (state) => {
            state.Own = true
            state.myTokens = false
            state.myCollections = false
            state.favoritesNFT = false
            state.favoritesCollection = false
            state.hidden = false
            state.galleries = false
		},
		isValidHidden: (state) => {
            state.Own = true
            state.myTokens = false
            state.myCollections = false
            state.favoritesNFT = false
            state.favoritesCollection = false
            state.hidden = false
            state.galleries = false
		},
		isValidGalleries: (state) => {
            state.Own = true
            state.myTokens = false
            state.myCollections = false
            state.favoritesNFT = false
            state.favoritesCollection = false
            state.hidden = false
            state.galleries = false
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
