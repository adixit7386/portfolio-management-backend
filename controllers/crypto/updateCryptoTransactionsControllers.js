const CryptoTransactions = require("../../models/CryptoTransactions");
const customErrorHandler = require("../../services/customErrorHandler");
const updateCryptoTransactionsControllers = async (req, res, next) => {
  const { user, currency, quantity, orderValue, timestamp, type } = req.body;
  if (!user || !currency || !quantity || !orderValue || !timestamp || !type) {
    return next(
      customErrorHandler.incompleteData("fill all the necessary details")
    );
  }
  if (req.user._id !== req.body.user) {
    return next(
      customErrorHandler.unAuthorized("You are not allowed to do that")
    );
  }
  //   const cryptoTransaction = await CryptoTransactions.create(req.body);
  try {
    const cryptoTransactionUpdated = await CryptoTransactions.findByIdAndUpdate(
      req.body._id,
      req.body,
      { new: true }
    );
    res.json(cryptoTransactionUpdated);
  } catch (error) {
    return next(error);
  }
};
module.exports = updateCryptoTransactionsControllers;
