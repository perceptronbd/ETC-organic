const WalletHistory = require('../../models/walletHistory');
const asyncHandler = require("express-async-handler");

exports.walletHistory = asyncHandler(async (req, res) => {
    const receiverId = req.user._id;
  
    const history = await WalletHistory.find({ recieverId: receiverId });
  
    if (!history || history.length === 0) {
      throw { status: 404, message: 'No wallet history found for the specified receiverId' };
    }
  
    return res.status(200).json({data: history, message: "Wallet history has been found"});
});