//express
const express = require("express");

const mongoose = require("mongoose");
const UserModel = require("../models/UserModel");
const ProductModel = require("../models/ProductModel");
const { getCart, CartAddItem, CartDeleteItem, EmptyCart } = require("../controllers/cart");
const isAuth = require("../middleware/isAuth");


const toId = mongoose.Types.ObjectId;

//router
const router = express.Router();

//get user's cart
router.get("/",isAuth,getCart )

//add item to cart
router.get("/:user/:product/",CartAddItem );

//delete item from cart 
router.delete("/:user/:product/",CartDeleteItem );

// empty the cart
router.delete("/:user",EmptyCart );


//export
module.exports = router;
