const MFundsTransactions = require("../../models/MFundsTransactions");
const customErrorHandler = require("../../services/customErrorHandler");
const updateMFundsTransactionsControllers = async (req, res, next) => {
  const { user, symbol, quantity, orderValue, timestamp, type } = req.body;
  if (!user || !symbol || !quantity || !orderValue || !timestamp || !type) {
    return next(
      customErrorHandler.incompleteData("fill all the necessary details")
    );
  }
  if (req.user._id !== req.body.user) {
    return next(
      customErrorHandler.unAuthorized("You are not allowed to do that")
    );
  }
  //   const MFundsTransaction = await MFundsTransactions.create(req.body);
  try {
    const MfundsTransactionUpdated = await MFundsTransactions.findByIdAndUpdate(
      req.body._id,
      req.body,
      { new: true }
    );
    res.json(MfundsTransactionUpdated);
  } catch (error) {
    return next(error);
  }
};
module.exports = updateMFundsTransactionsControllers;
