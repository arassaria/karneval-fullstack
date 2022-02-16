const express = require("express");
const {
  updateData,
  getUnverifiedBids,
  deleteData,
} = require("../lib/serverMethods");

const router = express.Router();

router.get("/allBids", async (req, res, next) => {
  try {
    const data = await getUnverifiedBids({ collectionName: "auction" });
    res.send(data);
  } catch (error) {
    next(new Error(error));
  }
});

router.patch("/bidVerification", async (req, res, next) => {
  const { id } = req.query;
  try {
    await updateData({ collectionName: "auction", id, data: req.body });
    res.send("Bid verified.");
  } catch (error) {
    next(new Error(error));
  }
});

router.delete("/bidVerification", async (req, res, next) => {
  const { id } = req.query;
  try {
    await deleteData({ collectionName: "auction", id });
    res.send("Bid deleted.");
  } catch (error) {
    next(new Error(error));
  }
});

module.exports = router;
