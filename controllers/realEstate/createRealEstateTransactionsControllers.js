const RealEstateTransactions = require("../../models/RealEstateTransactions");
const customErrorHandler = require("../../services/customErrorHandler");
const createRealEstateTransactionsControllers = async (req, res, next) => {
  const { user, name, address, purchaseValue, timestamp, description } =
    req.body;
  if (
    !user ||
    !name ||
    !address ||
    !purchaseValue ||
    !timestamp ||
    !description
  ) {
    return next(
      customErrorHandler.incompleteData("fill all the necessary details")
    );
  }

  const realEstateTransaction = await RealEstateTransactions.create(req.body);
  try {
    const realEstateTransactionSaved = await realEstateTransaction.save();
    res.json(realEstateTransactionSaved);
  } catch (error) {
    return next(error);
  }
};
module.exports = createRealEstateTransactionsControllers;
