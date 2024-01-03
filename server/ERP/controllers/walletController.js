const WalletHistory = require('../../models/walletHistory');
const asyncHandler = require("express-async-handler");

exports.walletHistoryERP = asyncHandler(async (req, res) => {
    const receiverId = req.body.receiverId;
    // console.log(receiverId);
    const history = await WalletHistory.find({ recieverId: receiverId });
    console.log(history);
    if (!history || history.length === 0) {
      throw { status: 404, message: 'No wallet history found for the specified receiverId' };
    }
  
    return res.status(200).json({data: history, message: "Wallet history has been found"});
});