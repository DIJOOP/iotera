import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Toaster from './components/Toaster';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from './components/admin/AdminHome';
import Adduser from './components/admin/pages/Adduser';
import ApproveProduct from './components/admin/pages/ApproveProduct';
import Products from './components/admin/pages/Products';
import Viewuser from './components/admin/pages/Viewuser';
import Home from './components/Home';
import Login from './components/Login';
import VendorHome from './components/vendor/VendorHome';
import EditUser from './components/admin/pages/EditUser';
import { useDispatch, useSelector } from 'react-redux';
import { LoadUser } from './Redux/Action/userAction';
import { useEffect } from 'react';
import RequireAuth from './components/RequireAuth';

function App() {
	const { user } = useSelector((state) => state.user);

	const dispatch = useDispatch();

	const ROLES = {
		User: 'Vendor',
		Admin: 'Admin'
	};

	useEffect(() => {
		if (!user) {
			dispatch(LoadUser());
		}
	}, []);
	return (
		<div className="App">
			<Router>
				<Toaster />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />

					{/* protected Routes Admin */}
					<Route element={<RequireAuth allowedRoles={[ ROLES.Admin ]} />}>
						<Route path="/admin" element={<Sidebar />}>
							<Route path="adduser" element={<Adduser />} />
							<Route path="viewuser" element={<Viewuser />} />
							<Route path="editproduct" element={<ApproveProduct />} />
							<Route path="product" element={<Products />} />
							<Route path="edituser" element={<EditUser />} />
						</Route>
					</Route>

					{/* protected Routes Vendor */}
					<Route element={<RequireAuth allowedRoles={[ ROLES.User ]} />}>
						<Route path="/vendor" element={<VendorHome />} />
					</Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
