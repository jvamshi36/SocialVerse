const User = require("../../../models/userSchema");
const jwt = require("jsonwebtoken");
const env = require("../../../config/enviroment");

module.exports.createSession = async function (req, res) {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (!user || user.password != req.body.password) {
      return res.json(422, {
        message: "Invalid username or password",
      });
    }
    return res.json(200, {
      message: "Valid email and password hurray!!",
      data: {
        token: jwt.sign(user.toJSON(), env.jwt_secret, { expiresIn: 10000 }),
      },
    });
  } catch (err) {
    console.log("error in user api", err);
    return res.json(500, {
      message: "Internal server error",
    });
  }
};
