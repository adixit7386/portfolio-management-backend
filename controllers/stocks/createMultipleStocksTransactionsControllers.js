const StocksTransactions = require("../../models/StocksTransactions");

const createMultipleStocksTransactionsControllers = async (req, res, next) => {
  try {
    const stockTransaction = await StocksTransactions.insertMany(req.body);
    res.json(stockTransaction);
  } catch (error) {
    return next(error);
  }
};
module.exports = createMultipleStocksTransactionsControllers;
