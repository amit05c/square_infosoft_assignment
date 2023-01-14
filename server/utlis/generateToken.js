const jwt = require("jsonwebtoken");

const generateToken = (userId, name) => {
  var token = jwt.sign({ userId, name }, process.env.JWT_SECRET);
  //   console.log(token)
  return token;
};

module.exports = {
  generateToken,
};
