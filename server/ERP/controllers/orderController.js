const Order = require('../../models/orderModel'); // Import the Order model
const mobileUser = require('../../models/mobileUserModel'); // Import the mobileUser model
const Cart = require('../../models/cartModel'); // Import the cart model
const Checkout = require('../../models/checkoutModel'); // Import the checkout model
const Branch = require('../../models/branchModel'); // Import the branch model
//import asynchandler
const asyncHandler = require('express-async-handler');

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find(); // Retrieve all orders

    res.status(200).json(orders); // Send retrieved orders in JSON format
  } catch (error) {
    console.error(error); // Log any errors
    res.status(500).json({ message: 'Error fetching orders' }); // Send error response
  }
};


exports.displayOrders = asyncHandler(async (req, res) => {
  try {
    const orders = await Order.find()
      .populate({
        path: 'cart',
        model: Cart, // replace with your Cart model name if different
        populate: {
          path: 'user',
          model: mobileUser // replace with your User model name if different
        }
      })
      .populate({
        path: 'checkoutDetails',
        model: Checkout // replace with your Checkout model name if different
      });

    console.log(orders);
    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching orders' });
  }
});

exports.getOnlineOrders = asyncHandler(async(req, res) => {
  try {
    const branchId = "658f3e49b2e456d220b116a5"
    const onlineBranch = await Branch.findOne({ _id: branchId })

    if (!onlineBranch) {
      res.status(404).json({ message: 'Branch not found' });
    }

    res.status(200).json(onlineBranch);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching online branch' });
  }
});