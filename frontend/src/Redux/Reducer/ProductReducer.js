import { createReducer } from '@reduxjs/toolkit';

const initialState = {};
export const productReducer = createReducer(initialState, {
	PRODUCT_REQUEST: (state) => {
		state.loading = true;
	},
	PRODUCT_SUCCESS: (state, action) => {
		state.loading = false;
		state.Products = action.payload;
	},
	PRODUCT_FAIL: (state, action) => {
		state.loading = false;
		state.error = action.payload;
	},
	clearErrors: (state) => {
		state.error = null;
	}
});

export const newProductReducer = createReducer(initialState, {
	NEWPRODUCT_REQUEST: (state) => {
		state.loading = true;
	},
	NEWPRODUCT_SUCCESS: (state, action) => {
		state.loading = false;
		state.Product = action.payload;
		state.isAdded=true
	},
	NEWPRODUCT_FAIL: (state, action) => {
		state.loading = false;
		state.error = action.payload;
		state.isAdded=false
	},
	NEWPRODUCT_RESET: (state, action) => {
		
		state.isAdded=false
	},


	clearErrors: (state) => {
		state.error = null;
		
	}
});


export const approvedProductReducer = createReducer(initialState, {
	APPROVEDPRODUCT_REQUEST: (state) => {
		state.loading = true;
	},
	APPROVEDPRODUCT_SUCCESS: (state, action) => {
		state.loading = false;
		state.products = action.payload;
	},
	APPROVEDPRODUCT: (state, action) => {
		state.loading = false;
		state.error = action.payload;
	},
	clearErrors: (state) => {
		state.error = null;
	}
});
