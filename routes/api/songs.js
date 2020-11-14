const router = require("express").Router();
const songsController = require("../../controllers/songsController");

// Matches with "/api/songs/:id"
router
  .route("/:id")
  .get(songsController.findById)

module.exports = router;
