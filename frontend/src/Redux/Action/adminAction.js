import Axios from '../axios';
import {
	ACCEPTPRODUCT_FAIL,
	ACCEPTPRODUCT_REQUEST,
	ACCEPTPRODUCT_SUCCESS,
	ALLUSERS_FAIL,
	ALLUSERS_REQUEST,
	ALLUSERS_SUCCESS,
	DELETEUSER_FAIL,
	DELETEUSER_REQUEST,
	DELETEUSER_SUCCESS,
	NEWVENDOR_FAIL,
	NEWVENDOR_REQUEST,
	NEWVENDOR_SUCCESS,
	PENDINGPRODUCT_FAIL,
	PENDINGPRODUCT_REQUEST,
	PENDINGPRODUCT_SUCCESS,
	UPDATEUSER_FAIL,
	UPDATEUSER_REQUEST,
	UPDATEUSER_SUCCESS
} from '../constants/adminConstants';
// Axios.defaults.withCredentials = true;

export const addVendor = (vendordata) => async (dispatch) => {
	try {
		dispatch({
			type: NEWVENDOR_REQUEST
		});

		const config = { headers: { 'Content-Type': 'application/json' } };
		const { data } = await Axios.post('/api/v1/admin/adduser', vendordata, config);
		console.log(data);
		dispatch({
			type: NEWVENDOR_SUCCESS,
			payload: data.user
		});
	} catch (error) {
		console.log(error);
		dispatch({
			type: NEWVENDOR_FAIL,
			payload: error.response.data.message
		});
	}
};

export const getAllUsers = () => async (dispatch) => {
	try {
		dispatch({
			type: ALLUSERS_REQUEST
		});

		// const config = { headers: { 'Content-Type': 'application/json' } };
		const { data } = await Axios.get('/api/v1/admin/allusers');

		console.log(data);

		dispatch({
			type: ALLUSERS_SUCCESS,
			payload: data.allusers
		});
	} catch (error) {
		console.log(error);
		dispatch({
			type: ALLUSERS_FAIL,
			payload: error.response.data.message
		});
	}
};


export const deleteUserbyAdmin = (id) => async (dispatch) => {
	try {
		dispatch({
			type: DELETEUSER_REQUEST
		});

		const { data } = await Axios.delete(`/api/v1/admin/deleteuser/${id}`);

		dispatch({
			type: DELETEUSER_SUCCESS,
			payload: data.success
		});
	} catch (error) {
		dispatch({
			type: DELETEUSER_FAIL,
			payload: error.response.data.message
		});
	}
};


export const updateUserbyAdmin = (id, userData) => async (dispatch) => {

	try {
	  dispatch({
		type: UPDATEUSER_REQUEST,
	  });
	  
	 
	  const config = { headers: { 'Content-Type': 'application/json' } };
	 

	  const { data } = await Axios.post(
		`/api/v1/admin/edituser/${id}`,
		userData,
		config
	  );
  
	  dispatch({
		type: UPDATEUSER_SUCCESS,
		payload: data.success,
	  });
	} catch (error) {
	  dispatch({
		type: UPDATEUSER_FAIL,
		payload: error.response.data.message,
	  });
	}
  };


export const getPendingProducts = () => async (dispatch) => {
	try {
		dispatch({
			type: PENDINGPRODUCT_REQUEST
		});

        const config = { headers: { 'Content-Type': 'application/json' } };
		const { data } = await Axios.get('/api/v1/admin/products/unaproved',config);

		dispatch({
			type: PENDINGPRODUCT_SUCCESS,
			payload: data.products
		});
	} catch (error) {
		dispatch({
			type: PENDINGPRODUCT_FAIL,
			payload: error.response.data.message
		});
	}
};


export const acceptProduct = (id,action) => async (dispatch) => {
	console.log(action)
	try {
		dispatch({
			type: ACCEPTPRODUCT_REQUEST
		});

        const config = { headers: { 'Content-Type': 'application/json' } };
		const { data } = await Axios.put(`/api/v1/admin/product/edit/${id}`,{action},config);

		dispatch({
			type: ACCEPTPRODUCT_SUCCESS,
			payload: data.status
		});
	} catch (error) {
		dispatch({
			type: ACCEPTPRODUCT_FAIL,
			payload: error.response.data.message
		});
	}
};





export const clearErrors = () => async (dispatch) => {
	dispatch({ type: 'clearErrors' });
};
