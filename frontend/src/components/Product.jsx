import React from 'react';
import './Product.css';

const Product = ({product}) => {
	return (
		<div className="products_box">
			<div className="image_box">
				<img src={product.image.url} alt="image" />
			</div>
			<div className="details_box">
				<div>
					<h4>Name</h4>
					<p>{product&&product.name}</p>
				</div>
				<div>
					<h4>Description</h4>
					<p>{product&&product.description}</p>
				</div>
			</div>
		</div>
	);
};

export default Product;
