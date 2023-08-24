const express = require("express");
const router = express.Router();
const {registerUser, loginUser,getAllUsers, updateUser} = require("../controllers/userController.js");
// const protect = require("../middleware/authMiddleware.js");

//User 
router.post("/login", loginUser);

//employee
router.post("/employee/register", registerUser);
router.get('/employee/users', getAllUsers);
router.put("/employee/update-users/:id",updateUser)


// //Sales
// router.post("/sales/purchase", inputSales, (req, res)=>{
//     res.status.json()
// })
// router.post("/sales/retaile", inputSales, (req, res)=>{
//     res.status.json()
// })
// router.post("/sales/wholesale", inputSales, (req, res)=>{
//     res.status.json()
// })



module.exports = router;