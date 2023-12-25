const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getAllUsers,
  updateUser,
  getUserById,
} = require("../controllers/userController.js");
const {
  createProduct,
  getAllProducts,
  calculateProductStock,
  addBranch,
} = require("../controllers/productController.js");
const {
  productManagement,
  salesManagement,
} = require("../middleware/authMiddleware.js");

// const protect = require("../middleware/authMiddleware.js");

//User
router.post("/login", loginUser);

//employee
router.post("/employee/register", registerUser);
router.get("/employee/users", getAllUsers);
router.put("/employee/update-users/:id", updateUser);
router.get("/employee/getuserbyid/:id", getUserById);

//products

router.post("/products/createproduct/:id", productManagement, createProduct);
router.get("/products/getproducts/:id", productManagement, getAllProducts);
router.get("/products/getstock/:id", productManagement, calculateProductStock);

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
