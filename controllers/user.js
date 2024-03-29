const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//get all Users
exports.getUsers = async (req, res) => {
  try {
    const listUsers = await User.find().populate("cart");
    res.status(200).send(listUsers);
  } catch (error) {
    res.status(400).send({ msg: "cannot get User list", error });
  }
};
exports.register = async (req, res) => {
  try {
    // req.body => newUser
    const { name, email, password, phone } = req.body;
    const foundUser = await User.findOne({ email });
    if (foundUser) {
      return res
        .status(400)
        .send({ errors: [{ msg: "Email should be unique try again !!" }] });
    }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    // const newUser
    const newUser = new User({ ...req.body });
    newUser.password = hashedPassword;
    await newUser.save();
    // create token
    const token = jwt.sign(
      {
        id: newUser._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: "7d" }
    );
    res.status(200).send({ msg: "Register Succ ...", user: newUser, token });
  } catch (error) {
    res
      .status(400)
      .send({ errors: [{ msg: "Can not regsiter the User !!! !!" }] });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // check if email exist
    const foundUser = await User.findOne({ email });
    if (!foundUser) {
      return res.status(400).send({ errors: [{ msg: "Bad credential !!" }] });
    }
    const checkPassword = await bcrypt.compare(password, foundUser.password);
    if (!checkPassword) {
      return res.status(400).send({ errors: [{ msg: "Bad credential !!" }] });
    }
    // create token
    const token = jwt.sign(
      {
        id: foundUser._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: "7d" }
    );
    res.status(200).send({ msg: "Login Succ ...", user: foundUser, token });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "Cannot login the User !!! !!" }] });
  }
};
//update profile's password
exports.updatePassword = async (req, res) => {
  try {
    const { password } = req.body;
    const user_id = await req.user._id;
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const updatedUser = { ...req.body };
    updatedUser.password = hashedPassword;

    await User.updateOne({ _id: user_id }, { $set: updatedUser });
    res
      .status(200)
      .send({ msg: `Password of profile with id ${user_id} is updated` });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "Cannot update password !!" }] });
  }
};

//update profile
exports.updateMyProfile = async (req, res) => {
  try {
    const user_id = await req.user._id;
    const updatedUser = { ...req.body };

    await User.updateOne({ _id: user_id }, { $set: updatedUser });
    res.status(200).send({ msg: `profile with id ${user_id} is updated` });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "Cannot update profile !!" }] });
  }
};
//update profile
exports.updateProfile = async (req, res) => {
  try {
    const { _id } = req.params;


    await User.updateOne({ _id }, { $set: { ...req.body } });
    res.status(200).send({ msg: `profile with id ${_id} is updated` });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "Cannot update profile !!" }] });
  }
};


