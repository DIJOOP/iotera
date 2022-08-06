const asyncHandler = require('express-async-handler');
const Product = require('../models/ProductModel');
const cloudinary = require('cloudinary');

exports.addProduct = asyncHandler(async (req, res) => {
	const image = await cloudinary.v2.uploader.upload(req.body.image, {
		folder: 'iotera/products'
	});

	req.body.image = {
		public_id: image.public_id,
		url: image.secure_url
	};
	req.body.vendor = req.user._id;
	req.body.district=req.user.district

	const product = await Product.create(req.body);

	res.status(201).json({
		success: true,
		product
	});
});

exports.getAprovedProducts = asyncHandler(async (req, res) => {
	const products = await Product.find({ approval: 'Approved' });

	res.status(200).json({
		success: true,
		products
	});
});

exports.getVendorProducts = asyncHandler(async (req, res) => {
	const id = req.user.id;

	const products = await Product.find({ vendor: id });

	res.status(200).json({
		success: true,
		products
	});
});


exports.searchProducts = asyncHandler(async (req, res) => {
	

	const keyword = req.params.keyword
	? {
		district: {
				$regex: req.params.keyword,
				$options: 'i'
			}
		}
	: {};

const products = await Product.find({...keyword });

	res.status(200).json({
		success: true,
		products
	});
});