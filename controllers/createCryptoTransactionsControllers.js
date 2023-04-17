const CryptoTransactions = require("../models/CryptoTransactions");

const createCryptoTransactionsControllers = async (req, res, next) => {
  console.log(req.body);
  const { currency, quantity, orderValue, timestamp, type } = req.body;
  if (!currency || !quantity || !orderValue || !timestamp || !type) {
    return next(
      customErrorHandler.incompleteData("fill all the necessary details")
    );
  }

  const cryptoTransaction = await CryptoTransactions.create(req.body);
  try {
    const cryptoTransactionSaved = await cryptoTransaction.save();
    res.json(cryptoTransactionSaved);
  } catch (error) {
    return next(error);
  }
};
module.exports = createCryptoTransactionsControllers;
