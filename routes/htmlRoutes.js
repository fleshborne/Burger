const path = require("path");
const router = require("express").Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/html.index"));
});

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/html.index"));
});

module.exports = router;
