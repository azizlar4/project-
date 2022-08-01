//1
const express = require("express");
const { register, login, getUsers, updateProfile, updatePassword } = require("../controllers/user");
const isAuth = require("../middleware/isAuth");
const isAdmin = require("../middleware/isAdmin");



const {
  registerValidation,
  loginValidation,
  validation,
  profileValidation,
  passwordValidation,
} = require("../middleware/validator");

//2
const router = express.Router();

//get all users 
router.get("/allUsers",isAdmin,getUsers);

//register
router.post("/register", registerValidation(), validation, register);

//login
router.post("/login", loginValidation(), validation, login);

//current user
router.get("/current", isAuth, (req, res) => {
  res.send(req.user);

});

//update password
router.put('/updatePassword',isAuth,passwordValidation(),validation,updatePassword)

//update Profile
router.put('/updateProfile',isAuth,profileValidation(),validation,updateProfile)

module.exports = router;
