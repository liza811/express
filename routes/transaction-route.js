const express = require("express");
const {
  getUserTransactions,
} = require("../controllers/transaction-controller");

const router = express.Router();

router.get("/user/:userId", getUserTransactions);

module.exports = router;
