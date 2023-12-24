
const Order = require('../../models/orderModel'); // Import the Order model

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find(); // Retrieve all orders

    res.status(200).json(orders); // Send retrieved orders in JSON format
  } catch (error) {
    console.error(error); // Log any errors
    res.status(500).json({ message: 'Error fetching orders' }); // Send error response
  }
};