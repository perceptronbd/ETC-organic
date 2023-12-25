const express = require("express");
const router = express.Router();


const {addBranch, getBranch}  = require("../controllers/branchController");

router.post("/branch/createBranch",addBranch)
router.get("/branch/getBranch", getBranch)



module.exports = router;