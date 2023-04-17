const StocksTransactions = require("../../models/StocksTransactions");
const customErrorHandler = require("../../services/customErrorHandler");
const updateCryptoTransactionsControllers = async (req, res, next) => {
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
  //   const cryptoTransaction = await CryptoTransactions.create(req.body);
  try {
    const stocksTransactionUpdated = await StocksTransactions.findByIdAndUpdate(
      req.body._id,
      req.body,
      { new: true }
    );
    res.json(stocksTransactionUpdated);
  } catch (error) {
    return next(error);
  }
};
module.exports = updateCryptoTransactionsControllers;
