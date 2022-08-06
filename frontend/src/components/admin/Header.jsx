import React from 'react';
import { useSelector } from 'react-redux';
import './Header.css';
import Logout from './Logout';

const Header = () => {

	const { user } = useSelector((state) => state.user);

	return (
		<div className="header_box">
			<div className="left_box">
				<div className="avatar">
					<img
						src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
						alt=""
					/>
				</div>
				<div className="user_data">
					<p>welcome!</p>
					<p style={{ fontWeight: 'bolder' }}>{user.name}</p>
				</div>
			</div>
			<div className="right_box">
				<Logout/>
			</div>
		</div>
	);
};

export default Header;
