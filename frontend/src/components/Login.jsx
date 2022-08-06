import React, { useEffect, useState } from 'react';
import './login.css';
import logo from '../images/logo1.png';
import UserSelect from './UserSelect';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, userLogin } from '../Redux/Action/userAction';
import { useNavigate } from 'react-router-dom';
import{toast} from "react-toastify"

const Login = () => {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const { isAuthenticated, user, error } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onSubmit = (data) => {
		dispatch(userLogin(data));
	};

	useEffect(
		() => {
			if (isAuthenticated) {
				if (user.role === 'Admin') navigate('/admin');

				if (user.role === 'Vendor') navigate('/vendor');
			}
			if(error){
				toast.error(error)
				dispatch(clearErrors())
			}
		},
		[ isAuthenticated,error ]
	);

	return (
		<div className="login_container">
			<div className="login_mainbox">
				<div className="login_box">
					<div className="logo_box">
						<img src={logo} alt="" />
						<div>
							<h2 style={{ fontWeight: 'lighter' }}> &nbsp;Login to &nbsp;</h2>
							<h2>Iotera</h2>
						</div>
					</div>
					<UserSelect />
					<div className="loginform_box">
						<form style={{gap:(errors.email &&errors.password)?"25px":"30px"}} onSubmit={handleSubmit(onSubmit)}>
							<input
								type="email"
								placeholder="Email"
								{...register('email', { required: true, maxLength: 20 })}
							/>
							{errors.email && <span style={{ color: 'red',fontSize:"x-small" }}>This field is required</span>}
							<input
								type="password"
								placeholder="Password"
								{...register('password', { required: true })}
							/>
							{errors.password && <span style={{ color: 'red' ,fontSize:"x-small"}}>This field is required</span>}

							<div>
								<label>
									<input type="checkbox" /> <span style={{ fontSize: 'small' }}>Remember</span>
								</label>
								<span style={{ fontSize: 'small' }}>forgot password?</span>
							</div>

							<div>
								<button>Register</button>
								<button type="submit">Login</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
