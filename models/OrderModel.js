//mongoose
const mongoose = require("mongoose");

//schema
const schema = mongoose.Schema;

//order schema
const orderSchema = new schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, require: true, ref: "user" },

    shippingAddress:{
      adress:{type:String,required:true},
      city:{type:String,required:true},
      postalCode:{type:String,required:true},
    },
    PaymentMethod :{type:String,required:true,default:"MasterCard"},


    orderItems: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          require: true,
          ref: "product",
        },
        name: { type: String, require: true },
        image_url: { type: String, require: true },
        price: { type: Number, require: true },
        quantity: { type: Number, require: true },
      },
    ],
    isPaid: { type: Boolean, require: true, default: false },
    isDeliverd :{ type: Boolean, require: true, default: false },
  },
  {
    timestamps: true,
  }
);

//export
module.exports = Order = mongoose.model("order", orderSchema);
