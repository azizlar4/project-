//import
const Payment = require("../models/PaymentModel");


//add Payment
exports.addPayment = async (req, res) => {
    try {
      const { address, city, postalCode, total,cardNumber,cardOwner,cvv,dateExpr } = req.body;
      const newPayment = new Payment({
        cardOwner,
        cardNumber,
        cvv,
        dateExpr,

        address,
        city,
        postalCode,
        total,
        isPaid:true,
    

        user_id:req.user._id
       
     
      });
      newPayment.populate('user_id')
      await newPayment.save();
      res.status(200).send({ msg: "Payment added", newPayment });
    } catch (error) {
      res.status(400).send({ msg: "cannot add Payment !!!", error });
    }
  };
  
  //edit Payment
exports.editPayment = async (req, res) => {
  try {
    const { _id } = req.params;
    await Payment.updateOne({ _id }, { $set: { ...req.body } });
    res
      .status(200)
      .send({ msg: `Payment with id ${req.params._id} is updated` });
  } catch (error) {
    res.status(400).send({ msg: "cannot edit Payment ", error });
  }
};


//get all Payment
exports.getPayments = async (req, res) => {
  try {
    const listPayments = await Payment.find().populate('user_id');
   
    res.status(200).send({msg :"this is the order's list" ,listPayments});
  } catch (error) {
    res.status(400).send({ msg: "cannot get orders list", error });
  }
};

// get one Payment
exports.getOnePayment = async (req, res) => {
  try {
    const { _id } = req.params;
    const PaymentToGet = await Payment.findOne({ _id }).populate('user_id');
    res.status(200).send(PaymentToGet);
  } catch (error) {
    res.status(400).send({ msg: "cannot get the order", error });
  }
};
// get one Payment using user_id
exports.getUserPayments = async (req, res) => {
  try {

    const PaymentToGet = await Payment.find({ user_id:req.user })
    res.status(200).send(PaymentToGet);
  } catch (error) {
    res.status(400).send({ msg: `cannot get the order`, error});
  }
};