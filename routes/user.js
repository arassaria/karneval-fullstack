const express = require("express");

const router = express.Router();
const CryptoJS = require("crypto-js");
const {
  validateUser,
  getLoginToken,
  getUserRights,
  insertData,
  checkAvailability,
} = require("../lib/serverMethods");

router.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = CryptoJS.SHA256(password).toString();
    const validation = await validateUser({
      username,
      password: hashedPassword,
    });
    res.send(validation);
  } catch (error) {
    next(new Error(error));
  }
});

router.post("/token", async (req, res, next) => {
  try {
    const { username } = req.body;
    const token = await getLoginToken({ username });
    res.json(token);
  } catch (error) {
    next(new Error(error));
  }
});

router.post("/rank", async (req, res, next) => {
  try {
    const { token } = req.body;
    const rank = await getUserRights({ token });
    res.json(rank);
  } catch (error) {
    console.log(error);
    next(new Error(error));
  }
});

router.post("/register", async (req, res, next) => {
  const { username, password, rank } = req.body;
  const hashedPassword = CryptoJS.SHA256(password).toString();
  try {
    await insertData({
      collectionName: "users",
      data: {
        username,
        password: hashedPassword,
        rank,
      },
    });
  } catch (error) {
    next(new Error(error));
  }
});

router.post("/checkUsername", async (req, res, next) => {
  const { username } = req.body;
  try {
    const available = await checkAvailability({ username });
    res.send(available);
  } catch (error) {
    console.log(error);
    next(new Error(error));
  }
});

module.exports = router;
