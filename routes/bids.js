const express = require("express");
const {
  getAllBids,
  insertData,
  deleteData,
  getHighestBid,
} = require("../lib/serverMethods");

const router = express.Router();
const auction = "auction";

router.get("/", async (req, res, next) => {
  try {
    const data = await getAllBids({ collectionName: auction });
    res.send(data);
  } catch (error) {
    next(new Error(error));
  }
});

router.get("/highest", async (req, res, next) => {
  try {
    const data = await getHighestBid({ collectionName: auction });
    res.send(data);
  } catch (error) {
    next(new Error(error));
  }
});

router.post("/bid", async (req, res, next) => {
  try {
    await insertData({ collectionName: auction, data: req.body });
    res.send("Bid added.");
  } catch (error) {
    next(new Error(error));
  }
});

router.delete("/bid", async (req, res, next) => {
  const { id } = req.query;
  try {
    await deleteData({ collectionName: "auction", id });
    res.send("Bid deleted");
  } catch (error) {
    next(new Error(error));
  }
});

module.exports = router;
