const express = require('express');
const router = express.Router();
const userController = require('../controllers/mobileUserController');
const profileUpdateController = require('../controllers/profileUpdateController');
const cartController = require('../controllers/cartController');
const orderController = require('../controllers/orderController');
const redeemCSB = require('../controllers/redeemCSBtotaka');
const bankController = require("../controllers/bankController")
const withdrawController = require('../controllers/withdrawController')
const upload = require('../middleware/imageMiddleware');
const authenticateUser = require('../middleware/authMiddleware'); 

//user
router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/update-profile',authenticateUser, upload.fields([{ name: 'image', maxCount: 1 }, { name: 'nationalIdImage', maxCount: 1 }]), profileUpdateController.updateProfile);

//cart
router.post('/add-to-cart',authenticateUser,cartController.addToCart);
router.post('/remove-from-cart',authenticateUser,cartController.removeFromCart);
router.post('/increase-quantity',authenticateUser,cartController.increaseQuantity);
router.post('/decrease-quantity',authenticateUser,cartController.decreaseQuantity);
router.post('/update-cart',authenticateUser,cartController.updateCart);
router.get('/get-cart-price',authenticateUser,cartController.getTotalPrice);
router.get('/get-cart-details',authenticateUser,cartController.getCartDetails);

//order
router.post('/place-order',authenticateUser,orderController.placeOrder);
router.get('/get-user-order-details',authenticateUser,orderController.getOrderDetails);


//wallet
router.post('/redeemCSB',authenticateUser, redeemCSB.redeemCSBtoTaka);
router.post('/withdraw',authenticateUser, withdrawController.createWithdraw);
router.get('/getwithdraw',authenticateUser, withdrawController.getWithdrawRequests);







//bank
router.post('/addBank',authenticateUser,bankController.createBank);
router.get('/getBank',authenticateUser,bankController.fetchBanksByUser);
router.delete('/deleteBank',authenticateUser,bankController.deleteBank);






module.exports = router; 
