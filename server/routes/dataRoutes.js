const express= require("express")
const { getUsers, deleteUser } = require("../controllers/dataControllers")

const dataRouter= express.Router()

dataRouter.route("/")
.get(getUsers)
dataRouter.route("/delete/:_id")
.delete(deleteUser)


module.exports={
    dataRouter
}
