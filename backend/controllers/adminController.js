const User = require('../models/UserModel');
const sendToken = require('../utils/jwtToken');
const asyncHandler = require('express-async-handler');
const Product = require('../models/ProductModel');

// USER

exports.addUserByAdmin = asyncHandler(async (req, res) => {
	console.log(req.body);

	const user = await User.create(req.body);

	res.status(201).json({
		success: true,
		user
	});
});

exports.getUser = asyncHandler(async (req, res) => {
	const user = await User.findById(req.params.id);
	if (!user) {
		res.status(404);
		throw new Error('user not found');
	}
	res.status(200).json({
		success: true,
		user
	});
});

exports.editUser = asyncHandler(async (req, res) => {
	const { email, password, name, district, role } = req.body;
	const newData = {
		email,
		password,
		name,
		district,
		role
	};

	const user = await User.findById(req.params.id);
	if (!user) {
		res.status(404);
		throw new Error('user not found');
	}

	const newUser = await User.findByIdAndUpdate(req.params.id, newData, {
		new: true,
		runValidators: true,
		useFindAndModify: false
	});

	res.status(200).json({
		success: true,
		user: newUser
	});
});

exports.deleteUser = asyncHandler(async (req, res) => {
	const user = await User.findById(req.params.id);

	if (!user) {
		res.status(404);
		throw new Error('user not found');
	}
	await user.remove();

	res.status(200).json({
		success: true,
		message: 'user deleted successfully'
	});
});

exports.getAllUsers = asyncHandler(async (req, res) => {
	const allusers = await User.find().select("+password");

	res.status(200).json({
		success: true,
		allusers
	});
});

// PRODUCTS

exports.getUnAprovedProducts = asyncHandler(async (req, res) => {
	const products = await Product.find({ approval: "Approval Pending" });

	res.status(200).json({
		success: true,
		products
	});
});

exports.giveProductAproval = asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id);
	const action=req.body.action
	console.log(action)

	if (!product) {
		res.status(404);
		throw new Error('product not found');
	}
	product.approval = action;

	await product.save();
	res.status(200).json({
		success:true,
		status:action
	});
});
