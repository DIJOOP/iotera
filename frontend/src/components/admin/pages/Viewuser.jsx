import React from 'react';
import './Viewuser.css';
import EditIcon from '@mui/icons-material/Edit';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllUsers } from '../../../Redux/Action/adminAction';
import { Link } from 'react-router-dom';

const Viewuser = () => {
	const { users, loading, error } = useSelector((state) => state.allUsers);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllUsers());
	}, []);

	return (
		<div className="common_main">
			<table>
				<tr>
					<th>Name</th>
					<th>Email</th>
					<th>Password</th>
					<th>Role</th>
					<th>District</th>
					<th>Action</th>
				</tr>
				{users &&
					users.map((user) => (
						<tr>
							<td>{user.name}</td>
							<td>{user.email}</td>
							<td>{user.password}</td>
							<td>{user.role}</td>
							<td>{user.district}</td>
							<td>
								<Link to="/admin/edituser" state={user}>
									<EditIcon />
								</Link>
							</td>
						</tr>
					))}
			</table>
		</div>
	);
};

export default Viewuser;
