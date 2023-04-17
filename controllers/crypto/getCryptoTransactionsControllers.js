const CryptoTransactions = require("../../models/CryptoTransactions");

const getCryptoTransactionsControllers = async (req, res, next) => {
  try {
    const cryptoTransactions = await CryptoTransactions.find({
      user: req.user._id,
    });
    res.send(cryptoTransactions);
  } catch (err) {
    return next(err);
  }
};
module.exports = getCryptoTransactionsControllers;
