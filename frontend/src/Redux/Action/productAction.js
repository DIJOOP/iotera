import Axios from '../axios';
import { APPROVEDPRODUCT_FAIL, APPROVEDPRODUCT_REQUEST, APPROVEDPRODUCT_SUCCESS, NEWPRODUCT_FAIL, NEWPRODUCT_REQUEST, NEWPRODUCT_SUCCESS, PRODUCT_FAIL, PRODUCT_REQUEST, PRODUCT_SUCCESS } from '../constants/productConstatnts';

export const vendorProducts = () => async (dispatch) => {
	try {
		dispatch({
			type: PRODUCT_REQUEST
		});

        const config = { headers: { 'Content-Type': 'application/json' } };
		const { data } = await Axios.get('/api/v1/product/vendor',config);

		dispatch({
			type: PRODUCT_SUCCESS,
			payload: data.products
		});
	} catch (error) {
		dispatch({
			type: PRODUCT_FAIL,
			payload: error.response.data.message
		});
	}
};
export const addNewProduct = (productData) => async (dispatch) => {
	try {
		dispatch({
			type: NEWPRODUCT_REQUEST
		});

        const config = { headers: { 'Content-Type': 'application/json' } };
		const { data } = await Axios.post('/api/v1/product/new',productData,config);

		dispatch({
			type: NEWPRODUCT_SUCCESS,
			payload: data.product
		});
	} catch (error) {
		dispatch({
			type: NEWPRODUCT_FAIL,
			payload: error.response.data.message
		});
	}
};


export const getAprovedProducts = () => async (dispatch) => {
	try {
		dispatch({
			type: APPROVEDPRODUCT_REQUEST
		});

        const config = { headers: { 'Content-Type': 'application/json' } };
		const { data } = await Axios.get('/api/v1/product/aproved',config);

		dispatch({
			type: APPROVEDPRODUCT_SUCCESS,
			payload: data.products
		});
	} catch (error) {
		dispatch({
			type: APPROVEDPRODUCT_FAIL,
			payload: error.response.data.message
		});
	}
};



export const searchProducts = (keyword) => async (dispatch) => {
	try {
		dispatch({
			type: APPROVEDPRODUCT_REQUEST
		});

		const { data } = await Axios.post(`/api/v1/product/search/${keyword}`);

		dispatch({
			type: APPROVEDPRODUCT_SUCCESS,
			payload: data.products
		});
	} catch (error) {
		dispatch({
			type: APPROVEDPRODUCT_FAIL,
			payload: error.response.data.message
		});
	}
};

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: 'clearErrors' });
  };

