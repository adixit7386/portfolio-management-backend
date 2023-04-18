const express = require("express");
const createRealEstateTransactionsControllers = require("../controllers/realEstate/createRealEstateTransactionsControllers");
const getRealEstateTransactionsControllers = require("../controllers/realEstate/getRealEstateTransactionsControllers");
const createMultipleRealEstateTransactionsControllers = require("../controllers/realEstate/createMultipleRealEstateTransactionsControllers.js");
const updateRealEstateTransactionsControllers = require("../controllers/realEstate/updateRealEstateTransactionsControllers");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");
router.post("/create", verifyToken, createRealEstateTransactionsControllers);
router.get("/get", verifyToken, getRealEstateTransactionsControllers);
router.post(
  "/createmany",
  verifyToken,
  createMultipleRealEstateTransactionsControllers
);
router.put("/update", verifyToken, updateRealEstateTransactionsControllers);

module.exports = router;
