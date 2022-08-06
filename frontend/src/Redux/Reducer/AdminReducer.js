import { createReducer } from '@reduxjs/toolkit';

const initialState = {};

export const newVendorReducer = createReducer(initialState, {
	 NEWVENDOR_REQUEST: (state) => {
		state.loading = true;
	},
	 NEWVENDOR_SUCCESS: (state, action) => {
		state.loading = false;
		state.vendor = action.payload;
		state.isAdded = true;
	},

	 NEWVENDOR_FAIL: (state, action) => {
		state.loading = false;
		state.user = null;
		state.isAdded = false
		state.error = action.payload;
	},

	 NEWVENDOR_RESET: (state, action) => {
		state.isAdded = null;
		state.user = null;
	},

	clearErrors: (state) => {
		state.error = null;
	}
});


export const allUsersReducer = createReducer(initialState, {
	ALLUSERS_REQUEST: (state) => {
	   state.loading = true;
   },
	ALLUSERS_SUCCESS: (state,action) => {
	   state.loading = false;
	   state.users = action.payload;
	   
   },

	ALLUSERS_FAIL: (state, action) => {
	   state.loading = false;
	   state.users = null;
	   state.error = action.payload;
   },


   clearErrors: (state) => {
	   state.error = null;
   }
});



export const pendingProductReducer = createReducer(initialState, {
	PENDINGPRODUCT_REQUEST: (state) => {
		state.loading = true;
	},
	PENDINGPRODUCT_SUCCESS: (state, action) => {
		state.loading = false;
		state.products = action.payload;
	},
	PENDINGPRODUCT: (state, action) => {
		state.loading = false;
		state.error = action.payload;
	},
	clearErrors: (state) => {
		state.error = null;
	}
});

export const acceptProductReducer = createReducer(initialState, {
	ACCEPTPRODUCT_REQUEST: (state) => {
		state.loading = true;
	},
	ACCEPTPRODUCT_SUCCESS: (state, action) => {
		state.loading = false;
		state.action = action.payload;
	},
	ACCEPTPRODUCT_FAIL: (state, action) => {
		state.loading = false;
		state.error = action.payload;
	},
	ACCEPTPRODUCT_RESET: (state, action) => {
		state.action =null
	},
	clearErrors: (state) => {
		state.error = null;
	}
});


export const updateUserReducer=createReducer(initialState,{
	UPDATEUSER_REQUEST:(state)=>{
	  state.loading=true
	},
	UPDATEUSER_SUCCESS:(state,action)=>{
	  state.loading=false
	  state.isUpdated=action.payload
	},
	UPDATEUSER_FAIL:(state,action)=>{
	  state.loading=false
	  state.error=action.payload
	},
	UPDATEUSER_RESET:(state)=>{
	  state.isUpdated=false
	},
  
	// deleteUSER
  
	DELETEUSER_REQUEST:(state)=>{
	  state.loading=true
	},
	DELETEUSER_SUCCESS:(state,action)=>{
	  state.loading=false
	  state.isDeleted=action.payload
	},
	DELETEUSER_FAIL:(state,action)=>{
	  state.loading=false
	  state.error=action.payload
	  
	},
	DELETEUSER_RESET:(state)=>{
	  state.isDeleted=false

	},
	
	clearErrors: (state) => {
	  state.error = null;
	  
	},
  
  
  })
