import React from 'react';
import './AddUser.css';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserbyAdmin, clearErrors, deleteUserbyAdmin } from '../../../Redux/Action/adminAction';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { DELETEUSER_RESET, UPDATEUSER_RESET } from '../../../Redux/constants/adminConstants';

const EditUser = () => {
	const { register, handleSubmit, errors } = useForm();
	const { isUpdated, isDeleted, error, loading } = useSelector((state) => state.updateUser);
	const [ userCred, setUserCred ] = useState({});

	const dispatch = useDispatch();
	const location = useLocation();
	const userData = location.state;
	const navigate = useNavigate();

	const onSubmit = (data) => {
		dispatch(updateUserbyAdmin(userCred._id, data));
	};

	const handleDelete = () => {
		dispatch(deleteUserbyAdmin(userCred._id));
	};

	useEffect(
		() => {
			if (isUpdated) {
				toast.success('data updated successfully');
				dispatch({
					type: UPDATEUSER_RESET
				});
				navigate('/admin/viewuser');
			}

			if (isDeleted) {
				toast.success('user deleted successfully');
				dispatch({
					type: DELETEUSER_RESET
				});
				navigate('/admin/viewuser');
			}

			if (error) {
				toast.error(error);
				dispatch(clearErrors());
			}
		},
		[ isUpdated, error, isDeleted ]
	);

	useEffect(
		() => {
			setUserCred(userData);
		},
		[ userData ]
	);

	return (
		<div className="common_main">
			<div className="title_box">
				<h3>Update User</h3>
				<button id="delete_btn" onClick={handleDelete}>
					Delete this user
				</button>
			</div>
			<div className="form_box">
				<form onSubmit={handleSubmit(onSubmit)}>
					<label>
						<span>Name :</span>
						<input
							type="text"
							value={userCred.name}
							placeholder="Name"
							// onChange={(e)=>setUserCred(e.target.value)}
							{...register('name', {
								onChange: (e) => setUserCred({ ...userCred, name: e.target.value }),
								required: true,
								maxLength: 10
							})}
						/>
					</label>

					<label>
						<span>Email Id :</span>
						<input
							type="email"
							value={userCred.email}
							placeholder="Email Id"
							{...register('email', {
								onChange: (e) => setUserCred({ ...userCred, email: e.target.value }),
								required: true,
								maxLength: 30
							})}
						/>
					</label>

					<label>
						<span>Password :</span>
						<input
							type="text"
							placeholder="Password"
							value={userCred.password}
							{...register('password', {
								onChange: (e) => setUserCred({ ...userCred, password: e.target.value }),
								required: true
							})}
						/>
					</label>

					<label>
						<span>Role :</span>

						<select
							value={userCred.role}
							{...register('role', {
								onChange: (e) => setUserCred({ ...userCred, role: e.target.value }),
								required: true
							})}
							name="role"
						>
							<option value="Admin">Admin</option>
							<option value="Vendor">Vendor</option>
						</select>
					</label>

					<label>
						<span>District :</span>
						<input
							type="text"
							placeholder="District"
							value={userCred.district}
							{...register('district', {
								onChange: (e) => setUserCred({ ...userCred, district: e.target.value }),
								required: true
							})}
						/>
					</label>
					<div>
						<button type="submit">Update User</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default EditUser;
