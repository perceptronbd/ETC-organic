const express = require("express");
const router = express.Router();


const {walletHistoryERP}  = require("../controllers/walletController");

// const { salesManagement } = require("../middleware/authMiddleware");
// const { checkLogin } = require("../middleware/checkLogin");


router.get("/getwallethistoryERP", walletHistoryERP)

module.exports = router;