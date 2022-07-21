//mongoose
const mongoose = require("mongoose");

//schema
const schema = mongoose.Schema;

//Cart schema
const cartSchema = new schema({
    
        total:{type: Number, require: true }
  
},{
  timestamps:true
});

//export
module.exports = Cart=mongoose.model('cart',cartSchema)