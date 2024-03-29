//mongoose
const mongoose = require("mongoose");

//schema
const schema = mongoose.Schema;

//product schema
const productSchema = new schema(
  {
    name: { type: String, require: true },
    brand: { type: String, require: true },
    description: { type: String, require: false },
    image_url: { type: String, require: true },
    price: { type: Number, require: true },
    quantity: { type: Number, require: true },
    rating: { type: Number, require: true },
    quantity_added: { type: Number, require: true,dafualt:0 }

  },
  {
    timestamps: true,
  }
);

//export
module.exports = Product = mongoose.model("product", productSchema);
