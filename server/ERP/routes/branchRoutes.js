const express = require("express");
const router = express.Router();


const {addBranch}  = require("../controllers/branchController");

router.post("/products/createBranch",addBranch)

module.exports = router;