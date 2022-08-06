const express=require("express");
const { addUserByAdmin, getAllUsers, deleteUser, getUser, editUser, getUnAprovedProducts, giveProductAproval } = require("../controllers/adminController");
const {  isAuthenticatedUser, isAdmin} = require("../middleware/auth");
const router=express.Router()


// user api

router.post('/admin/adduser',isAuthenticatedUser, isAdmin, addUserByAdmin);
router.get('/admin/user/:id',isAuthenticatedUser, isAdmin, getUser);
router.post('/admin/edituser/:id',isAuthenticatedUser, isAdmin, editUser);
router.delete('/admin/deleteuser/:id',isAuthenticatedUser, isAdmin, deleteUser);
router.get('/admin/allusers',isAuthenticatedUser, isAdmin, getAllUsers);


// products api

router.get('/admin/products/unaproved',isAuthenticatedUser, isAdmin, getUnAprovedProducts);
router.put('/admin/product/edit/:id',isAuthenticatedUser, isAdmin, giveProductAproval);


module.exports=router