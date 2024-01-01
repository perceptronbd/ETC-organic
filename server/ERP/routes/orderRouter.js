const express = require("express");
const router = express.Router();

const { salesManagement } = require("../middleware/authMiddleware");
const { checkLogin } = require("../middleware/checkLogin");

const { getAllOrders, displayOrders, getOnlineOrders} = require("../../ERP/controllers/orderController");

router.get("/getMobileUserOrders", checkLogin, salesManagement, getAllOrders);
router.get("/displayOrders", checkLogin, salesManagement, displayOrders);
router.get("/getOnlineOrders", checkLogin, salesManagement, getOnlineOrders);

//this is second PR for server

module.exports = router;