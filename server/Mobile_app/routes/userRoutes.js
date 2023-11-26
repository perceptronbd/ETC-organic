const express = require('express');
const router = express.Router();
const userController = require('../controllers/mobileUserController');
const profileUpdateController = require('../controllers/profileUpdateController');
const cartController = require('../controllers/cartController');
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
router.get('/get-cart-price',authenticateUser,cartController.getTotalPrice);
router.get('/get-cart-details',authenticateUser,cartController.getCartDetails);


module.exports = router; 
