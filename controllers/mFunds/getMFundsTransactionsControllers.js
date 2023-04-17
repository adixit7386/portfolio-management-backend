const MFundsTransactions = require("../../models/MFundsTransactions");

const getMFundsTransactionsControllers = async (req, res, next) => {
  try {
    const Transactions = await MFundsTransactions.find({
      user: req.user._id,
    });
    res.send(Transactions);
  } catch (err) {
    return next(err);
  }
};
module.exports = getMFundsTransactionsControllers;
