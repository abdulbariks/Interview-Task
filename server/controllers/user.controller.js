const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.allUser = async (req, res) => {
  const result = await User.find();
  res.send(result);
};

exports.signinUser = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);

  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashed });
  res.json({ message: "User created" });
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password)))
    return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  res
    .cookie("token", token, {
      httpOnly: true,
      sameSite: "Lax",
      secure: false,
    })
    .json({ message: "Logged in" });
};
