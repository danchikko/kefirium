import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

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
            state.myTokens = act
        }
    }
})