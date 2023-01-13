const { UserModel } = require("../models/user.model");
const bcrypt = require("bcryptjs");
const { hashPassword, checkPassword } = require("../utlis/password");
const { generateToken } = require("../utlis/generateToken");
const userCreate = async (req, res) => {
  try {
    let { name, email, password, dob } = req.body;

    const hashPass = hashPassword(password);
    let newUser = UserModel({ name, email, password: hashPass, dob });
    await newUser.save();

    res.status(201).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

const login = async (req, res) => {
  try {
    let { email, password } = req.body;
    let findUser = await UserModel.findOne({ email }).select("-__v");

    //if email not registered
    console.log(findUser);
    if (!findUser) {
      return res.status(400).send({ Error: "Email not registered" });
    }

    const checkPass = await checkPassword(password, findUser.password);

    // if password matched
    if (!checkPass) {
      return res.status(400).send({ Error: "Wrong password" });
    }
    let user = await UserModel.findOne({ email }).select("-password -__v");
    const token = generateToken(findUser._id, findUser.name, email);
    res.status(201).json({
      status: "success",
      data: {
        user,
        token,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

module.exports = {
  userCreate,
  login,
};
