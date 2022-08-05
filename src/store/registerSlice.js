import { createSlice } from '@reduxjs/toolkit'

const registerSlice = createSlice({
	name: 'register',
	initialState: {
		physicFace: true,
		jurFace: false,
		registerModal: false,
		signUpModal: false,
		signInModal: false,
	},
	reducers: {
		clickPhysic: (state) => {
			state.physicFace = true
			state.jurFace = false
		},
		clickJur: (state) => {
			state.physicFace = false
			state.jurFace = true
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
		},
	},
})

export const {
	clickPhysic,
	clickJur,
	onRegister,
	modalRegister,
	modalSignUp,
	modalSignIn,
	modalRegisterGlobal,
} = registerSlice.actions
export default registerSlice.reducer
