const RealEstateTransactions = require("../../models/RealEstateTransactions");

const createMultipleRealEstateTransactionsControllers = async (
  req,
  res,
  next
) => {
  try {
    const RealStateTransaction = await RealEstateTransactions.insertMany(
      req.body
    );
    res.json(RealStateTransaction);
  } catch (error) {
    return next(error);
  }
};
module.exports = createMultipleRealEstateTransactionsControllers;
