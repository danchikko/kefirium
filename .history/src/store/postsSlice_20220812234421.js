import { createSlice } from '@reduxjs/toolkit'

const postsSlice = createSlice({
	name: 'posts',
	initialState: {
		id: new Date().toLocaleString(),
		NFTImage: '',
		NFTName: '',
		description: '',
		reference: '',
		content: '',
		price: 0,
		mainImage: null,
		banner: null,
		name: '',
		categories: '',
		collectionDescription: '',
	},
	reducers: {
		createImage: (state, action) => {
			state.NFTImage = action.payload
		},
		createName: (state, action) => {
			state.NFTName = action.payload
		},
		createDescription: (state, action) => {
			state.description = action.payload
		},
		createReference: (state, action) => {
			state.reference = action.payload
		},
		createContent: (state, action) => {
			state.content = action.payload
		},
		createPrice: (state, action) => {
			state.price = action.payload
		},
		createCollectionImage: (state, action) => {
			state.mainImage = action.payload
		},
		createCollectionBanner: (state, action) => {
			state.banner = action.payload
		},
		createCollectionName: (state, action) => {
			state.name = action.payload
		},
		createCollectionCategories: (state, action) => {
			state.categories = action.payload
		},
		createCollectionDescription: (state, action) => {
			state.collectionDescription = action.payload
		},
	},
})

export const {
	createImage,
	createName,
	createDescription,
	createReference,
	createContent,
	createPrice,
	createCollectionImage,
	createCollectionBanner,
	createCollectionName,
	createCollectionCategories,
	createCollectionDescription,
} = postsSlice.actions

export default postsSlice.reducer
