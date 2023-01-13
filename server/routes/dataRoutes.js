const express= require("express")
const { getUsers } = require("../controllers/dataControllers")

const dataRouter= express.Router()

dataRouter.route("/")
.get(getUsers)
// .delete()


module.exports={
    dataRouter
}
