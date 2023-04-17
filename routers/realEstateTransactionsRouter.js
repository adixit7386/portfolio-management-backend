const express = require("express");
const createRealEstateTransactionsControllers = require("../controllers/RealEstate/createRealEstateTransactionsControllers");
const getRealEstateTransactionsControllers = require("../controllers/RealEstate/getRealEstateTransactionsControllers");
const createMultipleRealEstateTransactionsControllers = require("../controllers/RealEstate/createMultipleRealEstateTransactionsControllers.js");
const updateRealEstateTransactionsControllers = require("../controllers/RealEstate/updateRealEstateTransactionsControllers");
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
