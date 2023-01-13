const mongoose= require("mongoose")
const validator= require("validator")

const UserSchema= new mongoose.Schema({
    name: {type: String, required: [true, 'User required a Name']},
    email: {type: String, required: [true, 'User requierd a Email'], unique: true},
    password: {type: String, required: [true, 'User requierd a Password'], select: true},
    dob: {type: Date, required: [true, 'User requierd a DOB']},
    // validate: [validator.isEmail, 'Tour name must only contain characters']
})

const UserModel= mongoose.model("user",UserSchema)

module.exports={
    UserModel
}