const FDepositsTransactions = require("../../models/FDepositsTransactions");
const customErrorHandler = require("../../services/customErrorHandler");
const updateFDepositsTransactionsControllers = async (req, res, next) => {
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

  if (req.user._id !== req.body.user) {
    return next(
      customErrorHandler.unAuthorized("You are not allowed to do that")
    );
  }
  //   const cryptoTransaction = await CryptoTransactions.create(req.body);
  try {
    const FDepositsTransactionUpdated =
      await FDepositsTransactions.findByIdAndUpdate(req.body._id, req.body, {
        new: true,
      });
    res.json(FDepositsTransactionUpdated);
  } catch (error) {
    return next(error);
  }
};
module.exports = updateFDepositsTransactionsControllers;
