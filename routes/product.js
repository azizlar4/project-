//express
const express =require ('express');
const { getProducts, addProduct, editProduct, deleteproduct, getOneProduct } = require('../controllers/product');
const isAdmin = require("../middleware/isAdmin");


//router
const router =express.Router();

//get all products
router.get('/allProducts',getProducts)

//get one product
router.get('/:_id',getOneProduct)

//added product
router.post('/addProduct',isAdmin,addProduct)

//edit product
router.put('/editProduct/:_id',isAdmin,editProduct)

//delete product
router.delete('/deleteProduct/:_id',isAdmin,deleteproduct)


//export
module.exports=router