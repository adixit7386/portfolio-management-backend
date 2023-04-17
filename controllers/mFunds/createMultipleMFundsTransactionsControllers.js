const MFundsTransactions = require("../../models/MFundsTransactions");

const createMFundsTransactionsControllers = async (req, res, next) => {
  try {
    const stockTransaction = await MFundsTransactions.insertMany(req.body);
    res.json(stockTransaction);
  } catch (error) {
    return next(error);
  }
};
module.exports = createMFundsTransactionsControllers;
