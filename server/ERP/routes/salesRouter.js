const express = require("express");
const router = express.Router();


const {addSale}  = require("../controllers/salesController");

router.post("/addsales",addSale)

module.exports = router;