const express=require("express")

const router=express.Router()
const { isAuthenticatedUser } = require("../middleware/auth")

const {userLogin,userLogout, getUserDetail}=require("../controllers/userController")


router.post("/login",userLogin)
router.get("/logout",userLogout)
router.get("/loadme",isAuthenticatedUser, getUserDetail)

module.exports=router