const express = require("express");
const {
  getSalesReps,
  addSalesReps,
  deleteSalesReps,
} = require("../controller/SaleRepsController");
const router = express.Router();

router.get("/", (req, res) => {
  const posts = getSalesReps();
  res.send({ result: posts });
});

router.post("/", (req, res) => {
  const body = req.body;
  //find out max id in current posts
  const post = addSalesReps(body);
  res.send({ result: post });
});

router.delete("/:id", (req, res) => {
  try {
    const { id } = req.params;
    deleteSalesReps(id);
    res.sendStatus(204);
  } catch (e) {
    res.sendStatus(404);
  }
});

module.exports = router;
