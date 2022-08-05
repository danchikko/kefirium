import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
    name: 'register',
    initialState: {
        physicFace: true,
        jurFace: false,
        isAuth: false
    },
    reducers: {
        clickPhysic: (state) => {
            state.physicFace = true;
            state.jurFace = false;
        },
        clickJur: (state) => {
            state.physicFace = false;
            state.jurFace = true;
        },
        onRegister: (state, action) => {
            state.isAuth = action.payload
        }
    }
})

export const {clickPhysic, clickJur, agree, onRegister} = registerSlice.actions
export default registerSlice.reducer