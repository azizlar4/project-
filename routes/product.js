//express
const express =require ('express');
const { getProducts, addProduct, editProduct, deleteproduct, getOneProduct ,SetQuantityAdded, setQuantity_addedtoNull} = require('../controllers/product');
const isAdmin = require("../middleware/isAdmin");
const isAuth = require("../middleware/isAuth");


//router
const router =express.Router();

//get all products
router.get('/allProducts',getProducts)

//set quantity added
router.get("/null_quantity_add",isAuth,setQuantity_addedtoNull );

//get one product
router.get('/:_id',getOneProduct)

//added product
router.post('/addProduct',isAdmin,addProduct)

//edit product
router.put('/editProduct/:_id',isAdmin,editProduct)

//delete product
router.delete('/deleteProduct/:_id',isAdmin,deleteproduct)

//set quantity added
router.put("/:_id",isAuth,SetQuantityAdded );




//export
module.exports=router