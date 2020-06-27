const router = require("express").Router();
const connection = require("../config/connection");

// router.get("/all") will return all seeds from db and return the results
// as a json object
router.get("/all", function (req, res) {
  const query = "SELECT * FROM burgers";
  connection.query(query, (err, res) => {
    if (err) {
      throw err;
    } else {
      res.json(res);
    }
  });
});
