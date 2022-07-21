//import
const Order = require("../models/OrderModel");

//add order
exports.addOrder = async (req, res) => {
  try {
    const { orderItems, shippingAddress, PaymentMethod } = req.body;
    const newOrder = new Order({
        /*!!!*/
        id_user:req.id_user,
        orderItems,
        shippingAddress,
        PaymentMethod,
    });
    await newOrder.save();
    res.status(200).send({ msg: "order added", newOrder });
  } catch (error) {
    res.status(400).send({ msg: "cannot added order", error });
  }
};
