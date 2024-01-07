const express = require("express");
const router = express.Router();

const {getAllWithdrawRequests} = require("../controllers/withdrawRequestController");

router.get("/getWithdrawRequests", getAllWithdrawRequests);


module.exports = router;