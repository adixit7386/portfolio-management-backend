const express = require("express");
const createMFundsTransactionsControllers = require("../controllers/mFunds/createMFundsTransactionsControllers");
const getMFundsTransactionsControllers = require("../controllers/mFunds/getMFundsTransactionsControllers");
const createMultipleMFundsTransactionsControllers = require("../controllers/mFunds/createMultipleMFundsTransactionsControllers.js");
const updateMFundsTransactionsControllers = require("../controllers/mFunds/updateMFundsTransactionsControllers");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");
router.post("/create", verifyToken, createMFundsTransactionsControllers);
router.get("/get", verifyToken, getMFundsTransactionsControllers);
router.post(
  "/createmany",
  verifyToken,
  createMultipleMFundsTransactionsControllers
);
router.put("/update", verifyToken, updateMFundsTransactionsControllers);

module.exports = router;
