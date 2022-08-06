import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAprovedProducts } from '../../../Redux/Action/productAction';
import Product from '../../Product';

const Products = () => {
	const { products, loading, error } = useSelector((state) => state.approvedProducts);
	const dispatch = useDispatch();

	useEffect(
		() => {
			if (!products) {
				dispatch(getAprovedProducts());
			}
		},
		[ products ]
	);

	return (
		<div className="products_container">
			<h3>View Products</h3>
			{products &&
				products.map((product) => (
					<div key={product._id} style={{"borderBottom": "1px solid rgb(212, 212, 212)"}}>
						<Product product={product} />
					</div>
				))}
		</div>
	);
};

export default Products;
