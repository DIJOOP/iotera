const express=require("express")
const { addProduct, getAprovedProducts, getVendorProducts, searchProducts } = require("../controllers/productController")
const { isAuthenticatedUser } = require("../middleware/auth")
const router=express.Router()

router.post("/product/new",isAuthenticatedUser,addProduct)
router.get("/product/aproved",getAprovedProducts)
router.get("/product/vendor",isAuthenticatedUser, getVendorProducts)
router.post("/product/search/:keyword", searchProducts)

module.exports=router