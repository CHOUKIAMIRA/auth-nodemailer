const express=require("express")
const { register, login, getcurrent } = require("../controller/user_controller")
const { registerValidation, validation, loginValidation } = require("../middelware/validation")
const { isauth } = require("../middelware/isauth")
const { sendEmail } = require("../controller/emailController")
const userRouter=express.Router()
userRouter.post("/register",registerValidation,validation,register)
userRouter.post("/login",loginValidation,validation,login)
userRouter.get("/current",isauth,getcurrent)
userRouter.post("/sendmail", sendEmail)
module.exports=userRouter