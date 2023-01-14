const express= require("express")
const { userCreate, login, getUsers } = require("../controllers/userControllers")
const { errorHandle } = require("../Error-handleing-middleware/errorHandle")


const userRouter= express.Router()

userRouter.route("/")
.post(errorHandle,userCreate)
.get(login)


module.exports={
    userRouter
}