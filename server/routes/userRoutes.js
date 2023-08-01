const express = require("express");
const router = express.Router();
const {registerUser} = require("../controllers/userController.js");
// const protect = require("../middleware/authMiddleware.js");

router.post("/register", registerUser);

module.exports = router;