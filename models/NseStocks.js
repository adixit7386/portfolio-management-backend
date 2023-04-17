const mongoose = require("mongoose");

const nseStocksSchema = new mongoose.Schema(
  {
    SYMBOL: { type: String, unique: true },
    SERIES: { type: String },
    OPEN: { type: String },
    HIGH: { type: String },
    LOW: { type: String },
    CLOSE: { type: String },
    LAST: { type: String },
    PREVCLOSE: { type: String },
    TOTTRDQTY: { type: String },
    TOTTRDVAL: { type: String },
    TIMESTAMP: { type: String },
    TOTALTRADES: { type: String },
    ISIN: { type: String },
    field14: { type: String },
    NAME: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = new mongoose.model("nseStocks", nseStocksSchema);
