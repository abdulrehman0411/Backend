const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const setUser = async (req, res) => {
  try {
    const findUser = await User.findOne({ email: req.body.email });
    if (findUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const user = await User.create(req.body);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (!user) {
      return res.status(400).json({ message: "Inavid Username or Password" });
    }
    const token = jwt.sign(
      { user_id: user._id, email: user.email, username: user.name },
      "abcd"
    );
    res.status(200).json({ token: token });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getUsers,
  getUser,
  setUser,
  loginUser,
};
