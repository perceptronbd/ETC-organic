const MobileUser = require('../../models/mobileUserModel'); 

async function getCSBAndTaka(req, res) {
    try {
      const userID = req.params.userID; // Extract userID from request parameter
  
      const user = await MobileUser.findById(userID); // Fetch user data using userID
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' }); // Handle non-existent user
      }
  
      const { totalCSB, CSB } = user; // Destructure relevant fields
  
      if (totalCSB < 45) {
        return res.status(400).json({ message: 'Total CSB must be greater than 45' }); // Handle insufficient CSB
      }
  
      const taka = CSB ; // Convert CSB to Taka (assuming 1 CSB = 10 Taka)
  
      return res.json({ csb: totalCSB, taka }); // Send successful response with CSB and Taka
    } catch (error) {
      console.error(error); // Log any unexpected errors
      return res.status(500).json({ message: 'Internal server error' }); // Handle internal server errors
    }
  }
  
  module.exports = getCSBAndTaka;
