const RealEstateTransactions = require("../../models/RealEstateTransactions");
const customErrorHandler = require("../../services/customErrorHandler");
const updateCryptoTransactionsControllers = async (req, res, next) => {
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
  if (req.user._id !== req.body.user) {
    return next(
      customErrorHandler.unAuthorized("You are not allowed to do that")
    );
  }
  //   const cryptoTransaction = await CryptoTransactions.create(req.body);
  try {
    const RealEstateTransactionUpdated =
      await RealEstateTransactions.findByIdAndUpdate(req.body._id, req.body, {
        new: true,
      });
    res.json(RealEstateTransactionUpdated);
  } catch (error) {
    return next(error);
  }
};
module.exports = updateCryptoTransactionsControllers;
