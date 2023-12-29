const express = require("express");
const router = express.Router();


const {addPurchase,getAllPurchases}  = require("../controllers/purchaseController");

router.post("/addPurchase",addPurchase)
router.get("/getallPurchase",getAllPurchases)


module.exports = router;