const MFundsTransactions = require("../models/MFundsTransactions");
const customErrorHandler = require("../services/customErrorHandler");
const createMFundsTransactionsControllers = async (req, res, next) => {
  console.log(req.body);
  const { symbol, quantity, orderValue, timestamp, type } = req.body;
  if (!symbol || !quantity || !orderValue || !timestamp || !type) {
    return next(
      customErrorHandler.incompleteData("fill all the necessary details")
    );
  }

  const MFundsTransaction = await MFundsTransactions.create(req.body);
  try {
    const MFundsTransactionSaved = await MFundsTransaction.save();
    res.json(MFundsTransactionSaved);
  } catch (error) {
    return next(error);
  }
};
module.exports = createMFundsTransactionsControllers;
