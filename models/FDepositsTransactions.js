const mongoose = require("mongoose");

const fDepositsTransactionsSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    amount: { type: String },
    recurring: { type: Boolean },
    interest: { type: String },
    compounded: { type: String },
    duration: { type: String },
    timestamp: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = new mongoose.model(
  "fDepositsTransactions",
  fDepositsTransactionsSchema
);
