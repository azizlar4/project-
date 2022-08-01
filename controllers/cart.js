const mongoose = require("mongoose");
const UserModel = require("../models/UserModel");
const ProductModel = require("../models/ProductModel");


const toId = mongoose.Types.ObjectId;

exports.getCart = async (req, res) => {
  
  try {
    const user = await req.user.populate('cart')
    res.status(200).json({ cart:user.cart });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

exports.CartAddItem = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.user).populate('cart');
    const user2 = await UserModel.findById(req.params.user);
    const product = await ProductModel.findById(req.params.product);


    if (user2.cart.includes(toId(product))) {
      return res.status(400).json({ msg: `This product already in cart !` });
    }
   
    user.cart.push(product);
    user.save();
    
    res.status(200).json({ msg: "added to Cart", user });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

exports.CartDeleteItem = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.user);
    const product = await ProductModel.findById(req.params.product);

    if (!user.cart.includes(toId(product))) {
      return res
        .status(400)
        .json({ msg: `${product._id} doesn't exist in cart` });
    }

    user.cart = user.cart.filter((e) => e != req.params.product);
    user.save();
    res.status(200).json({ msg: `${product._id} is removed from cart`, user });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

exports.EmptyCart = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.user);
    user.cart = [];
    user.save();
    res.status(200).json({ msg: "cart is now empty !", user });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
