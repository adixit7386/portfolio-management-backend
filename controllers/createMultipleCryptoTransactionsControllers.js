const CryptoTransactions = require("../models/CryptoTransactions");

const createMultipleCryptoTransactionsControllers = async (req, res, next) => {
  try {
    const cryptoTransaction = await CryptoTransactions.insertMany(req.body);
    res.json(cryptoTransaction);
  } catch (error) {
    return next(error);
  }
};
module.exports = createMultipleCryptoTransactionsControllers;
