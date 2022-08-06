import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogout } from '../../Redux/Action/userAction';

const Logout = () => {
	const { isAutenticated } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	// useEffect(()=>{
	//     if(!isAutenticated) navigate("/")
	// },[isAutenticated])

	return (
		<button
			id="logout_btn"
			onClick={() => {
				dispatch(userLogout());
			}}
		>
			Log Out
		</button>
	);
};

export default Logout;
