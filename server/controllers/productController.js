const asyncHandler = require("express-async-handler");

const Product = require("../models/productModel");

const createProduct  = asyncHandler(async(req,res) =>{
    const { productName, salesPrice, csb, points, description,image,unit,purchasePrice,category} = req.body;
    const data = { productName, salesPrice, csb, points, description,image,unit,purchasePrice,category};

    const product = new Product(data)

    if(!product){
        res.status(500);
        throw new Error("Product not created");
    }

    const createdProduct = await product.save()
    res.status(201).json(createdProduct);

})

const getAllProducts = asyncHandler(async(req,res) => {
    const allProducts = await Product.find({})
    res.status(200).json(allProducts)
  })

module.exports = {
    createProduct,
    getAllProducts
};