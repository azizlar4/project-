//express
const express =require ('express');
const { addOrder } = require('../controllers/order');
const isAuth = require('../middleware/isAuth');

//router
const router =express.Router();

//create order
router.post('/addOrder',isAuth,addOrder)






//export
module.exports = router;
