const express = require("express");
const createFDepositsTransactionsControllers = require("../controllers/FDeposits/createFDepositsTransactionsControllers");
const getFDepositsTransactionsControllers = require("../controllers/FDeposits/getFDepositsTransactionsControllers");
const createMultipleFDepositsTransactionsControllers = require("../controllers/FDeposits/createMultipleFDepositsTransactionsControllers.js");
const updateFDepositsTransactionsControllers = require("../controllers/FDeposits/updateFDepositsTransactionsControllers");
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
