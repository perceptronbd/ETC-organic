const express = require("express");
const router = express.Router();
const {registerUser, loginUser} = require("../controllers/userController.js");
// const protect = require("../middleware/authMiddleware.js");

//User 
router.post("/register", registerUser);
router.post("/login", loginUser);

//Sales
router.post("/sales/purchase", inputSales, (req, res)=>{
    res.status.json()
})
router.post("/sales/retaile", inputSales, (req, res)=>{
    res.status.json()
})
router.post("/sales/wholesale", inputSales, (req, res)=>{
    res.status.json()
})

module.exports = router;