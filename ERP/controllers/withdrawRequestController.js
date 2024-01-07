const Withdraw = require('../../models/withdrawModel');
const MobileUser = require('../../models/mobileUserModel');
const Bank = require('../../models/bankModel');
// const asyncHandler = require('express-async-handler');

exports.getAllWithdrawRequests = async (req, res) => {
    try {
      // Get all withdraw requests
      const withdrawRequests = await Withdraw.find();
  
      // Check payment type for each request
      const processedRequests = await Promise.all(
        withdrawRequests.map(async (request) => {
          let processedRequest = { ...request.toObject() };
  
          if (request.paymentType === 'bank') {
            // If payment type is bank, get bank details using bankId
            const bankDetails = await Bank.findById(request.bankId);
  
            if (bankDetails) {
              processedRequest.bankName = bankDetails.bankName;
              processedRequest.branch = bankDetails.branch;
              processedRequest.accountNumber = bankDetails.accountNumber;
            }
          } else {
            // If payment type is nagad or bkash, get user mobile number using userId
            const userDetails = await MobileUser.findById(request.userId);
  
            if (userDetails) {
              processedRequest.userMobileNumber = userDetails.mobileNumber;
            }
          }
  
          return processedRequest;
        })
      );
  
      res.status(200).json({ withdrawRequests: processedRequests });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };