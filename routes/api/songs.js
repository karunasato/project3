const router = require("express").Router();
const { any } = require("prop-types");
const songController = require("../../controllers/songController");

router.get("/all", songController.getSong);

module.exports = router;