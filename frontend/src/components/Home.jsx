import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';
import './Home.css';
import Product from './Product';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector, useDispatch } from 'react-redux';
import { getAprovedProducts, searchProducts } from '../Redux/Action/productAction';

const Home = () => {
	const { user, isAuthenticated } = useSelector((state) => state.user);
	const { products, loading, error } = useSelector((state) => state.approvedProducts);
	const [ key, setKey ] = useState('');

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleFilter = (e) => {
		e.preventDefault();
		setKey(e.target.value);
		dispatch(searchProducts(e.target.value));
		if (e.target.value === '') dispatch(getAprovedProducts());
	};

	useEffect(
		() => {
			if (!products) {
				dispatch(getAprovedProducts());
			}
		},
		[ products ]
	);

	useEffect(() => {
		if (isAuthenticated && user.role === 'Admin') {
			navigate('/admin');
		}
		if (isAuthenticated && user.role === 'Vendor') {
			navigate('/vendor');
		}
	}, [isAuthenticated]);

	return (
		<div className="Home_Container">
			<header className="header_box1">
				<img src={logo} alt="" />
				<Link to="/login">Login</Link>
			</header>
			<div className="search">
				<h3>Products</h3>
				<div className="search_box">
					<SearchIcon />
					<input type="text" onChange={handleFilter} value={key} placeholder="Search District" />
				</div>
			</div>
			<div className="all_products">
				{products &&
					products.map((product) => (
						<div key={product._id} style={{ borderBottom: '1px solid rgb(212, 212, 212)' }}>
							<Product product={product} />
						</div>
					))}
			</div>
		</div>
	);
};

export default Home;
