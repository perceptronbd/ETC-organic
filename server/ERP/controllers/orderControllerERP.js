const asyncHandler = require("express-async-handler");
const OrderModel = require('../../models/orderModel');
// const CheckoutModel = require('../../models/checkoutModel');
// const CartModel = require('../../models/cartModel');


exports.getAllOrders = asyncHandler(async (req, res) => {
    try {
        const orders = await OrderModel.find({})
            
           
            console.log(orders);
        if (!orders) {
            return res.status(404).json({ message: 'No orders found' });
        }

        res.json(orders);
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});