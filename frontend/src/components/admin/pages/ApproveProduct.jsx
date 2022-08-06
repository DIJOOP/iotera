import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { acceptProduct, getPendingProducts } from '../../../Redux/Action/adminAction';
import { ACCEPTPRODUCT_RESET } from '../../../Redux/constants/adminConstants';

const ApproveProduct = () => {
	const { products, error: productError, loading: productLoading } = useSelector((state) => state.pendingProducts);
	const { action, error, loading } = useSelector((state) => state.productStatus);
	const dispatch = useDispatch();

	const actionHandler = (id, action) => {
		dispatch(acceptProduct(id, action));
	};

	useEffect(
		() => {
			if (!products) dispatch(getPendingProducts());
			if (action) {
				toast.success(`Product is ${action}`);
				dispatch({
					type: ACCEPTPRODUCT_RESET
				});
				dispatch(getPendingProducts());
			}
		},
		[ products, action ]
	);

	return (
		<div className="common_main">
			<table>
				<tr>
					<th>Product</th>
					<th>Name</th>
					<th>Description</th>
					<th>Action</th>
				</tr>

				{products &&
					products.map((product) => (
						<tr>
							<td style={{ width: '120px' }}>
								<img src={product.image.url} alt="image" />
							</td>
							<td>{product.name}</td>
							<td>{product.description}</td>

							<td style={{ width: '25%' }}>
								<div className="approve_box">
									<button
										onClick={() => actionHandler(product._id, 'Approved')}
										style={{ backgroundColor: 'rgba(40,204,45,255)' }}
									>
										Accept Product
									</button>
									<button
										onClick={() => actionHandler(product._id, 'Rejected')}
										style={{ backgroundColor: 'rgba(216,46,63,255)' }}
									>
										Reject Product
									</button>
								</div>
							</td>
						</tr>
					))}
			</table>
		</div>
	);
};

export default ApproveProduct;
