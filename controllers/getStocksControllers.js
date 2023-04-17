const nseStocks = require("../models/NseStocks");

const getStocksControllers = async (req, res, next) => {
  const keyword = req.query.search
    ? {
        $or: [
          { NAME: { $regex: req.query.search, $options: "i" } },
          { SYMBOL: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};

  try {
    const stocks = await nseStocks.find(keyword);
    // const users = await User.find(keyword);

    res.json(stocks).status(201);
  } catch (err) {
    return next(err);
  }
};
module.exports = getStocksControllers;
