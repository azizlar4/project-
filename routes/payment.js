//1
const express = require("express");
const { addPayment, editPayment, getPayments, getOnePayment, getUserPayments } = require("../controllers/payment");
const isAuth = require("../middleware/isAuth");
const isAdmin = require("../middleware/isAdmin");
const { orderValidation, validation } = require("../middleware/validator");
//router
const router = express.Router();

//add 
router.post('/addPayment',isAuth,orderValidation(),validation,addPayment)
//edit
router.put('/editPayment/:_id',isAuth,editPayment)

//get all orders
router.get('/',isAdmin,getPayments)

//get one order
router.get('/one/:_id',getOnePayment)

//get one order
router.get('/user/',isAuth,getUserPayments)


//export
module.exports = router;