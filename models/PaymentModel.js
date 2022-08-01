//mongoose
const mongoose = require("mongoose");

//Schema
const Schema = mongoose.Schema;

//payment Schema
const paymentSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: "user" },

  cardOwner: { type: String, required: true },
  cardNumber: { type: Number, required: true },
  dateExpr: { type: String, required: true },
  cvv: { type: Number, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  postalCode: { type: String, required: true },

  total: { type: Number, require: true },

  isPaid: { type: Boolean, require: true, default: false },
  isDeliverd: { type: Boolean, require: true, default: false },
},
{
  timestamps: true,
});
module.exports = Payment = mongoose.model("payment", paymentSchema);