const router = require("express").Router();
const Burger = require("../models/burger.js");
const burger = new Burger();

router.get("/", (req, res) => {
  // burger selectAll here
  burger.selectAll().then();

  // render the response

  // catch error
});

module.exports = router;
