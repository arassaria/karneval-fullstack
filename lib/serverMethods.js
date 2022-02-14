const { ObjectId } = require("mongodb");
const { collection } = require("./database");

async function getAllBids({ collectionName }) {
  const cursor = collection(collectionName).find();
  return await cursor.toArray();
}

async function getHighestBid({ collectionName }) {
  const cursor = collection(collectionName).find().sort({ money: -1 }).limit(1);
  return await cursor.toArray();
}

async function insertData({ collectionName, data }) {
  return await collection(collectionName).insertOne(data);
}

async function deleteData({ collectionName, id }) {
  return await collection(collectionName).deleteOne({ _id: ObjectId(id) });
}

exports.getAllBids = getAllBids;
exports.getHighestBid = getHighestBid;
exports.insertData = insertData;
exports.deleteData = deleteData;
