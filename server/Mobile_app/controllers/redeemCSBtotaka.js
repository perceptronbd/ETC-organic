const MobileUser = require('../../models/mobileUserModel'); 

async function redeemCSBtoTaka(req, res) {
  try {
      const { user } = req; // Extract userID from request parameter

      const existingUser = await MobileUser.findById(user); // Fetch user data using userID

      if (!existingUser) {
          return res.status(404).json({ message: 'User not found' }); // Handle non-existent user
      }

      const { totalCSB, CSB } = existingUser; // Destructure relevant fields

      if (totalCSB < 45) {
          return res.status(400).json({ message: 'Total CSB must be greater than 45' }); // Handle insufficient CSB
      }

      // Convert CSB to Taka (assuming some conversion logic)
      const conversionRate = 1; // You need to define the actual conversion rate
      const taka = CSB * conversionRate;

      // Update the user model
      const updatedUser = await MobileUser.findOneAndUpdate(
          { _id: user },
          { $set: { taka, CSB: 0 } },
          { new: true }
      );

      if (!updatedUser) {
          return res.status(500).json({ message: 'Failed to update user' }); // Handle update failure
      }

      return res.json({ csb: updatedUser.totalCSB, taka: updatedUser.taka }); // Send successful response with updated CSB and Taka
  } catch (error) {
      console.error(error); // Log any unexpected errors
      return res.status(500).json({ message: 'Internal server error' }); // Handle internal server errors
  }
}

  
  module.exports = { redeemCSBtoTaka};
