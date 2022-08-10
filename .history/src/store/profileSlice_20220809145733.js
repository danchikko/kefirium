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
            state.
        }
    }
})