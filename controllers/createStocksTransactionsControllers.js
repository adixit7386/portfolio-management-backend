const StocksTransactions = require("../models/StocksTransactions");
const customErrorHandler = require("../services/customErrorHandler");
const createStocksTransactionsControllers = async (req, res, next) => {
  console.log(req.body);
  const { user, symbol, quantity, orderValue, timestamp, type } = req.body;
  if (!user || !symbol || !quantity || !orderValue || !timestamp || !type) {
    return next(
      customErrorHandler.incompleteData("fill all the necessary details")
    );
  }

  const stockTransaction = await StocksTransactions.create(req.body);
  try {
    const stockTransactionSaved = await stockTransaction.save();
    res.json(stockTransactionSaved);
  } catch (error) {
    return next(error);
  }
};
module.exports = createStocksTransactionsControllers;
