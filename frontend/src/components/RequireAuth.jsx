import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation,  Outlet, useNavigate } from 'react-router-dom';

const RequireAuth = ({ allowedRoles }) => {
	const location = useLocation();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	

	const { user } = useSelector((state) => state.user);

	{
		if (user && user.role) {
			if (allowedRoles && allowedRoles.includes(user.role)) {
				return <Outlet />;
			}
		} else {
			navigate("/")
			 console.log(location.pathname);
			
		}
	}
};

export default RequireAuth;
