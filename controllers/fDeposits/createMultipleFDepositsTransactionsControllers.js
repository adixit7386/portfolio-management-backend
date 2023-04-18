const FDepositsTransactions = require("../../models/FDepositsTransactions");

const createMultipleFDepositsTransactionsControllers = async (
  req,
  res,
  next
) => {
  try {
    const FDepositsTransaction = await FDepositsTransactions.insertMany(
      req.body
    );
    res.json(FDepositsTransaction);
  } catch (error) {
    return next(error);
  }
};
module.exports = createMultipleFDepositsTransactionsControllers;
