const RealEstateTransactions = require("../../models/RealEstateTransactions");

const getRealEstateTransactionsControllers = async (req, res, next) => {
  try {
    const stockTransactions = await RealEstateTransactions.find({
      user: req.user._id,
    });
    res.send(stockTransactions);
  } catch (err) {
    return next(err);
  }
};
module.exports = getRealEstateTransactionsControllers;
