import { createSlice } from "@reduxjs/toolkit";

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
        isValidOwn: (state, action) => {
            state.Own = action.payload
        },
        isValidMyTokens: (state, action) => {
            state.myTokens = action.payload
        },
        isValidMyCollections: (state, action) => {
            state.myCollections = action.payload
        },
        isValidFavoritesNFT: (state, action) => {
            state.favoritesNFT = action.payload
        },
        isValidFavoritesCollection: (state, action) => {
            state.favoritesCollection = action.payload
        },
        isValidHidden: (state, action) => {
            state.hidden = action.payload
        },
        isValidGalleries: (state, action) => {
            state.galleries = action.payload
        }
    }
})

export const {isValidOwn, isValidMyTokens, isValidMyCollections, isValidFavoritesNFT, isValid} = profileSlice.actions