const FDepositsTransactions = require("../../models/FDepositsTransactions");

const getFDepositsTransactionsControllers = async (req, res, next) => {
  try {
    const fDepositsTransactions = await FDepositsTransactions.find({
      user: req.user._id,
    });
    res.send(fDepositsTransactions);
  } catch (err) {
    return next(err);
  }
};
module.exports = getFDepositsTransactionsControllers;
