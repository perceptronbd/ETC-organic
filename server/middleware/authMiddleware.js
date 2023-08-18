const asyncHandler = require('express-async-handler');
const User = require("../models/userModel");

const productManagement = asyncHandler(async (req, res, next) => {
    const userId = req.params.userId;
    const userData = await User.findById(userId);

    if (!userData) {
        return res.status(404).json({ message: "User not found" });
    }

    const permission = userData.permissions.productManagement;

    if (permission) {
        next();
    } else {
        return res.status(403).json({ message: "Doesn't have permission for Product Management" });
    }
});

const salesManagement = asyncHandler(async (req, res, next) => {
    const userId = req.params.userId;
    const userData = await User.findById(userId);

    if (!userData) {
        return res.status(404).json({ message: "User not found" });
    }

    const permission = userData.permissions.inputSales;

    if (permission) {
        next();
    } else {
        return res.status(403).json({ message: "Doesn't have permission for Sales" });
    }
});

module.exports = { productManagement, salesManagement };