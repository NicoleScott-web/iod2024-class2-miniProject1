const express = require("express");
const router = express.Router();
const SaleRepsRoute = require('./SalesRepsRoute')
const PostRoute = require('./PostRoute')
router.use("/SaleReps", SaleRepsRoute);
router.use("/Posts", PostRoute);
router.use("/Posts", PostRoute);

module.exports = router;
