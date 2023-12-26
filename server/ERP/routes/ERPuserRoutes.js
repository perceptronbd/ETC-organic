const express = require("express");
const router = express.Router();
const {registerUser, loginUser,getAllUsers, updateUser, getUserById} = require("../controllers/userController.js");
const { checkLogin } = require("../middleware/checkLogin");
const {createProduct,getAllProducts,calculateProductStock, addBranch}  = require("../controllers/productController.js");
const {productManagement}  = require("../middleware/authMiddleware.js");

// const protect = require("../middleware/authMiddleware.js");

//User 
router.post("/login", loginUser);

//employee
router.post("/employee/register", registerUser);
router.get('/employee/getallusers', getAllUsers);
router.put("/employee/update-users/:id",updateUser)
router.get("/employee/getuserbyid/:id",getUserById)

//products  


router.get("/products/getproducts",checkLogin,productManagement, getAllProducts)
router.post("/products/createproduct",checkLogin,productManagement, createProduct)








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