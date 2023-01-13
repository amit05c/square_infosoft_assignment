const mongoose= require("mongoose")
require("dotenv").config()
const DB= process.env.MONGO_URL.replace('<password>',process.env.PASSWORD)
mongoose.set('strictQuery', false);
const connection = mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports={connection}