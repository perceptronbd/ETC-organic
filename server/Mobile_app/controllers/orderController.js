const asyncHandler = require("express-async-handler");
const OrderModel = require('../../models/orderModel');
const CheckoutModel = require('../../models/checkoutModel');
const CartModel = require('../../models/cartModel');

exports.placeOrder = asyncHandler(async (req, res) => {
    const userId = req.user._id;
    const { name, phone, division, district, address } = req.body;
  

    const checkoutDetails = new CheckoutModel({
      user: userId,
      name,
      phone,
      division,
      district,
      address
    });
    await checkoutDetails.save();
  

    const cart = await CartModel.findOne({ user: userId, order: false });
    if (!cart) {
      throw new Error('No active cart found for checkout');
    }
    
    const orderDate = new Date();

    const order = new OrderModel({
      user: userId,
      cart: cart._id,
      checkoutDetails: checkoutDetails._id,
      orderDate: orderDate,
    });
    await order.save();
  

    cart.order = true;
    await cart.save();
  
    res.status(201).json(order);
});


exports.getOrderDetails = asyncHandler(async (req, res) => {
    const userId = req.user._id;
  
    const orders = await OrderModel.find({ user: userId })
      .populate('user','_id') 
      .populate({
        path: 'cart',
        select: 'products totalPrice',
        populate: {
          path: 'products.product',
        }
      })
      .populate('checkoutDetails'); 
  
    if (!orders || orders.length === 0) {
      return res.status(404).json({ message: 'No orders found for the user' });
    }
  
    res.json(orders);
  });