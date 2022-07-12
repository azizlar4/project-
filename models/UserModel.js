//mongoose
const mongoose = require("mongoose");

//schema
const schema = mongoose.Schema;

//product schema
const userSchema = new schema({
  name: { type: String, require: true },
  last_name: { type: String, require: true },
  password: { type: String, require: true },
  email: { type: String, require: true },
  phone: { type: Number, require: true },
  isAdmin: { type: Boolean, require: true ,default:false},
  
});

//export
module.exports = User=mongoose.model('user',userSchema)