const express= require("express")
const { userCreate, login } = require("../controllers/userControllers")

const userRouter= express.Router()

userRouter.route("/")
.post(userCreate)
.get(login)

module.exports={
    userRouter
}