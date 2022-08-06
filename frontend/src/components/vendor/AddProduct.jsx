import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addNewProduct, clearErrors, vendorProducts } from '../../Redux/Action/productAction';
import { toast } from 'react-toastify';
import { NEWPRODUCT_RESET } from '../../Redux/constants/productConstatnts';

const AddProduct = () => {
	const { isAdded, loading, error } = useSelector((state) => state.addProduct);

	const { register, handleSubmit, errors } = useForm();
	const [ image, setImage ] = useState(null);
	const dispatch = useDispatch();

	const handleFileInputChange = (e) => {
		const file = e.target.files[0];
		previewFile(file);
	};

	const previewFile = (file) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			setImage(reader.result);
		};
	};

	const onSubmit = (data) => {
		data.image = image;
		dispatch(addNewProduct(data));
	};

	useEffect(
		() => {
			if (isAdded) {
				toast.success('Product Added');
				dispatch({
					type: NEWPRODUCT_RESET
				});
				dispatch(vendorProducts());
			}
			if (error) toast.error(error);
			dispatch(clearErrors());
		},
		[ isAdded, error ]
	);

	return (
		<div className="form_box">
			<form onSubmit={handleSubmit(onSubmit)}>
				<label>
					<span>Name :</span>
					<input type="text" placeholder="Name" {...register('name', { required: true, maxLength: 20 })} />
				</label>

				<label>
					<span>Description :</span>
					<textarea
						type="Number"
						placeholder="Description"
						{...register('description', { required: true })}
					/>
				</label>

				<label>
					<span>Price :</span>
					<input type="Number" placeholder="Price" {...register('price', { required: true })} />
				</label>
				<label>
					<span>Image :</span>
					<input accept="image/*" type={'file'} onChange={handleFileInputChange} />
				</label>

				<div>
					<button
						style={{ cursor: loading ? 'progress' : 'pointer' }}
						disabled={loading ? true : false}
						type="submit"
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddProduct;
