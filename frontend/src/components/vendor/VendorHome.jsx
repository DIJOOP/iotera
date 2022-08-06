import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../images/logodark.png';
import { vendorProducts } from '../../Redux/Action/productAction';
import Logout from '../admin/Logout';
import Product from '../Product';
import AddProduct from './AddProduct';
import TimeLine from './TimeLine';
import './vendorhome.css';

const VendorHome = () => {
	const { user } = useSelector((state) => state.user);
	const { Products, error } = useSelector((state) => state.products);
	const { Product: newproduct } = useSelector((state) => state.addProduct);

	const dispatch = useDispatch();

	useEffect(
		() => {
			if (!Products) dispatch(vendorProducts());
		},
		[ Products ]
	);

	return (
		<div className="vendor_container">
			<section className="userdata_box">
				<div className="icon_box">
					<img id="logodark" src={logo} alt="" />
				</div>
				<div className="user_profile">
					<div>
						<p>Name: {user && user.name}</p>
						<p>District: {user && user.district}</p>
					</div>
					<div>
						<p>Email id: {user && user.email}</p>
						<Logout />
					</div>
				</div>
			</section>
			<section className="alldetail_container">
				<div className="addproduct_box">
					<AddProduct />
				</div>
				<div className="myproduct_box">
					<h3>Your Products</h3>
					{Products &&
						Products.map((product) => (
							<div key={product._id} className="common_Main2">
								<Product product={product} />
								<TimeLine product={product} />
							</div>
						))}
				</div>
			</section>
		</div>
	);
};

export default VendorHome;
