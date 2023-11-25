const express = require('express');
const router = express.Router();
const userController = require('../controllers/mobileUserController');
const profileUpdateController = require('../controllers/profileUpdateController');
const upload = require('../middleware/imageMiddleware'); // Import the Multer middleware
const authenticateUser = require('../middleware/authMiddleware'); 

router.post('/register', userController.register);
router.post('/login', userController.login);

// Use the Multer middleware in the '/update-profile' route
router.post('/update-profile',authenticateUser, upload.fields([{ name: 'image', maxCount: 1 }, { name: 'nationalIdImage', maxCount: 1 }]), profileUpdateController.updateProfile);

module.exports = router; // Export the router
