import React from 'react';
import './AdminHome.css';
import { NavLink, Outlet } from 'react-router-dom';
import Header from './Header';
import logo from '../../images/logo.png';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import AddCardIcon from '@mui/icons-material/AddCard';
import PreviewIcon from '@mui/icons-material/Preview';

const AdminHome = () => {
	
	return (
		<div className="main_container">
			<div className="sidebar_Container">
				<div className="icon_container">
					<img src={logo} alt="" />
				</div>

				<div className="options">
					<NavLink className="inactive" to="/admin/adduser">
						<PersonAddAltIcon /> Add User
					</NavLink>

					<NavLink className="inactive" to="/admin/viewuser">
						<PersonSearchIcon /> View User
					</NavLink>
					<NavLink className="inactive" to="/admin/editproduct">
						<AddCardIcon /> Accept Product
					</NavLink>
					<NavLink className="inactive" to="/admin/product">
						<PreviewIcon /> View Product
					</NavLink>
				</div>
			</div>
			<div className="content_container">
				<div className="header_bo">
					<Header/>
				</div>
				<div className="content_box">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default AdminHome;
