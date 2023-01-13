const express= require("express")
const { userCreate, login, getUsers } = require("../controllers/userControllers")

const userRouter= express.Router()

userRouter.route("/")
.post(userCreate)
.get(login)


module.exports={
    userRouter
}