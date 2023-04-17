const StocksTransactions = require("../models/StocksTransactions");

const getStocksTransactionsControllers = async (req, res, next) => {
  try {
    const stockTransactions = await StocksTransactions.find({
      user: req.user._id,
    });
    res.send(stockTransactions);
  } catch (err) {
    return next(err);
  }
};
module.exports = getStocksTransactionsControllers;
