import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
    name: 'register',
    initialState: {
        physicFace: true,
        jurFace: false,
        isAuth: false,
        registerModal: false,
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
        },
        modalRegister: (state) => {
			state.registerModal = !state.registerModal
		},
        modalSignUp: (state) => {
			state.signUpModal = !state.signUpModal
		},
		modalSignIn: (state) => {
			state.signInModal = !state.signInModal
		},
		modalRegisterGlobal: (state) => {
			state.registerModal = false
		}
    }
})

export const {clickPhysic, clickJur, onRegister, modalRegister} = registerSlice.actions
export default registerSlice.reducer