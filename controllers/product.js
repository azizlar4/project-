//import
const Product = require("../models/ProductModel");

//get all products
exports.getProducts = async (req, res) => {
  try {
    const listProducts = await Product.find();
    res.status(200).send({msg :"this is the product's list" ,listProducts });
  } catch (error) {
    res.status(400).send({ msg: "cannot get product list", error });
  }
};

// get one product
exports.getOneProduct = async (req, res) => {
  try {
    const { _id } = req.params;
    const productToGet = await Product.findOne({ _id });
    res.status(200).send(productToGet);
  } catch (error) {
    res.status(400).send({ msg: "cannot get the product", error });
  }
};

//add product
exports.addProduct = async (req, res) => {
  try {
    const { name, description, image_url, price, quantity, rating } = req.body;
    const newProduct = new Product({
      name,
      description,
      image_url,
      price,
      quantity,
      rating,
    });
    await newProduct.save();

    res.status(200).send({ msg: "product added", newProduct });
  } catch (error) {
    res.status(400).send({ msg: "cannot get product list", error });
  }
};

//edit product
exports.editProduct = async (req, res) => {
  try {
    const { _id } = req.params;
    await Product.updateOne({ _id }, { $set: { ...req.body } });
    res
      .status(200)
      .send({ msg: `product with id ${req.params._id} is updated` });
  } catch (error) {
    res.status(400).send({ msg: "cannot edit product ", error });
  }
};
exports.SetQuantityAdded =async (req,res)=>{
  try {
    const { _id } = req.params;
    await Product.updateOne({ _id }, { $set: { ...req.body } });
    res
      .status(200)
      .send({ msg: `quantity added of product with id ${req.params._id} is updated` });
  } catch (error) {
    res.status(400).send({ msg: "cannot edit product ", error });
  }
}

//delete product
exports.deleteproduct = async (req, res) => {
  try {
    const { _id } = req.params;
    await Product.deleteOne({ _id: _id });
    res
      .status(200)
      .send({ msg: `product with id ${req.params._id} is deleted` });
  } catch (error) {
    res.status(400).send({ msg: "cannot delete product ", error });
  }
};
