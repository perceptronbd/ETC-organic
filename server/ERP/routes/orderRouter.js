const express = require("express");
const router = express.Router();

const { salesManagement } = require("../middleware/authMiddleware");
const { checkLogin } = require("../middleware/checkLogin");

const { getAllOrders } = require("../../ERP/controllers/orderController");

router.get("/getMobileUserOrders", checkLogin, salesManagement, getAllOrders);

module.exports = router;