const express = require("express");
const router = express.Router();


const {addSale}  = require("../controllers/salesController");

const { salesManagement } = require("../middleware/authMiddleware");
const { checkLogin } = require("../middleware/checkLogin");


router.post("/addsales",checkLogin, salesManagement, addSale)

module.exports = router;