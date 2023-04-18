const FDepositsTransactions = require("../../models/FDepositsTransactions");
const customErrorHandler = require("../../services/customErrorHandler");
const createFDepositsTransactionsControllers = async (req, res, next) => {
  const { user, amount, recurring, interest, compounded, duration, timestamp } =
    req.body;

  if (
    !user ||
    !amount ||
    recurring == null ||
    !interest ||
    !compounded ||
    !duration ||
    !timestamp
  ) {
    return next(
      customErrorHandler.incompleteData("fill all the necessary details")
    );
  }

  const FDepositsTransaction = await FDepositsTransactions.create(req.body);
  try {
    const FDepositsTransactionSaved = await FDepositsTransaction.save();
    res.json(FDepositsTransactionSaved);
  } catch (error) {
    return next(error);
  }
};
module.exports = createFDepositsTransactionsControllers;
