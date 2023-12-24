const express = require("express");
const router = express.Router();


const {getAllOrders}  = require("../controllers/orderControllerERP");

router.get("/orders/getallorders", getAllOrders)



module.exports = router;