const mongoose = require("mongoose");

const cryptoTransactionsSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    amount: { type: String },
    recurring: { type: Boolean },
    interest: { type: String },
    compunded: { type: String },
    duration: { type: String },
    timestamp: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = new mongoose.model(
  "cryptoTransactions",
  cryptoTransactionsSchema
);
