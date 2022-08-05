import { createSlice } from '@reduxjs/toolkit'

export const optionsSlice = createSlice({
	name: 'options',
	initialState: {
		sorted: '',
		categoriesModal: false,
		supportModal: false,
		registerModal: false,
		signUpModal: false,
		signInModal: false, 
	},
	reducers: {
		sortedPost: (state, action) => {
			state.sorted = action.payload
		},
		modalCategories: (state) => {
			state.categoriesModal = !state.categoriesModal
		},
		closeCategoriesModal: (state, action) => {
			state.categoriesModal = action.payload
		},
		modalSupport: (state) => {
			state.supportModal = !state.supportModal
		},
		closeSupportModal: (state) => {
			state.supportModal = false
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
	},
})

export const {
	sortedPost,
	modalCategories,
	closeCategoriesModal,
	modalSupport,
	closeSupportModal,
	modalRegister,
	modalSignUp,
	modalSignIn,
	modalRegisterGlobal,
} = optionsSlice.actions
export default optionsSlice.reducer
