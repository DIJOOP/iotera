import React from 'react';
import './AddUser.css';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addVendor, clearErrors } from '../../../Redux/Action/adminAction';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { NEWVENDOR_RESET } from '../../../Redux/constants/adminConstants';

const Adduser = () => {
	const { register, handleSubmit, errors } = useForm();
	const { user, isAdded, error, loading } = useSelector((state) => state.newVendor);

	const dispatch = useDispatch();

	const onSubmit = (data) => {
		dispatch(addVendor(data));
	};

	useEffect(
		() => {
			if (isAdded) {
				toast.success('vendor added');
				dispatch({
					type: NEWVENDOR_RESET
				});
			}

			if (error) {
				toast.error(error);
				dispatch(clearErrors());
			}
		},
		[ isAdded, error ]
	);

	return (
		<div className="common_main">
			<div className="title_box">
				<h3>Add User</h3>
				<button>view All Admin User</button>
			</div>
			<div className="form_box">
				<form onSubmit={handleSubmit(onSubmit)}>
					<label>
						<span>Name :</span>
						<input
							type="text"
							placeholder="Name"
							{...register('name', { required: true, maxLength: 10 })}
						/>
					</label>

					<label>
						<span>Email Id :</span>
						<input
							type="email"
							placeholder="Email Id"
							{...register('email', { required: true, maxLength: 30 })}
						/>
					</label>

					<label>
						<span>Password :</span>
						<input type="password" placeholder="Password" {...register('password', { required: true })} />
					</label>

					<label>
						<span>Role :</span>

						<select {...register('role', { required: true })} name="role">
							<option value="Admin">Admin</option>
							<option value="Vendor">Vendor</option>
						</select>
					</label>

					<label>
						<span>District :</span>
						<input type="text" placeholder="District" {...register('district', { required: true })} />
					</label>
					<div>
						<button type="submit">Add User</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Adduser;
