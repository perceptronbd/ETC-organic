const express = require("express");
const router = express.Router();


const {addPurchase}  = require("../controllers/purchaseController");

router.post("/addPurchase",addPurchase)

module.exports = router;