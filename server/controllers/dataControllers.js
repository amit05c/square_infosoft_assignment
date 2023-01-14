const { UserModel } = require("../models/user.model");

const getUsers = async (req, res) => {
  try {
    let queryObj = { ...req.query };
    let excludedFields = ["page", "limit"];
    excludedFields.forEach((el) => delete queryObj[el]);
    //  console.log(queryObj)
    let findUsers = await UserModel.find(queryObj).select("-password -__v");
    res.status(201).json({
      status: "success",
      data: {
        user: findUsers,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    let { _id } = req.params;
    // console.log(_id)
    await UserModel.findByIdAndDelete(_id);
    res.status(201).json({
      status: "success",
    });
  } catch (err) {}
};
module.exports = {
  getUsers,
  deleteUser,
};
