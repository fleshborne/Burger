const router = require("express").Router();
// this page will take the route requests, setting /api and / as the two routes
// api & html
const apiRoutes = require("./apiRoutes");
router.use("/api", apiRoutes);

const htmlRoutes = require("./htmlRoutes");
router.use("/", htmlRoutes);

module.exports = router;
