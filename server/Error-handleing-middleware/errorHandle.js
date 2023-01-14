const errorHandle = (req, res, next) => {
  try {
    let { name, email, password, dob } = req.body;
    console.log(password);
    if (!name || !email || !password || !dob) {
      return res.status(400).send({ Error: "Please fill all the input" });
    }

    if (name.length < 4) {
      return res
        .status(400)
        .send({ Error: "Name must be greater or equal 4 charachters" });
    }

    let checkEmail = email.split("");

    if (
      !checkEmail.includes("@") ||
      checkEmail[0] == "@" ||
      !checkEmail.includes(".")
    ) {
      return res.status(400).send({ Error: "Please enter corrent email" });
    }

    if (password.length < 4) {
      return res
        .status(400)
        .send({ Error: "Password must be grater or equal than 4 character" });
    }

    next();
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

module.exports = {
  errorHandle,
};
