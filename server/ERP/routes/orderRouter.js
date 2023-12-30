const express = require("express");
const router = express.Router();

const { salesManagement } = require("../middleware/authMiddleware");
const { checkLogin } = require("../middleware/checkLogin");

const { getAllOrders, displayOrders} = require("../../ERP/controllers/orderController");

router.get("/getMobileUserOrders", checkLogin, salesManagement, getAllOrders);
router.get("/displayOrders", checkLogin, salesManagement, displayOrders);

module.exports = router;