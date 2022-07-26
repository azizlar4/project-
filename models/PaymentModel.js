//mongoose
const mongoose = require("mongoose");

//schema
const schema = mongoose.Schema;

//payment schema
const paymentSchema = new schema({
    user:{type:mongoose.Types.ObjectId, ref: "user"},
     shippingAddress:{
        adress:{type:String,required:true},
        city:{type:String,required:true},
        postalCode:{type:String,required:true},
      },
      total: { type: Number, require: true },
      isPaid: { type: Boolean, require: true, default: false },
      isDeliverd :{ type: Boolean, require: true, default: false },
   

     });
