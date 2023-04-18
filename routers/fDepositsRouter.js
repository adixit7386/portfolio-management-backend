const express = require("express");
const createFDepositsTransactionsControllers = require("../controllers/fDeposits/createFDepositsTransactionsControllers");
const getFDepositsTransactionsControllers = require("../controllers/fDeposits/getFDepositsTransactionsControllers");
const createMultipleFDepositsTransactionsControllers = require("../controllers/fDeposits/createMultipleFDepositsTransactionsControllers.js");
const updateFDepositsTransactionsControllers = require("../controllers/fDeposits/updateFDepositsTransactionsControllers");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");
router.post("/create", verifyToken, createFDepositsTransactionsControllers);
router.get("/get", verifyToken, getFDepositsTransactionsControllers);
router.post(
  "/createmany",
  verifyToken,
  createMultipleFDepositsTransactionsControllers
);
router.put("/update", verifyToken, updateFDepositsTransactionsControllers);

module.exports = router;
