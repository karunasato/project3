const db = require("../models");
// Defining methods for the userController
module.exports = {
  getSong: (req, res) => {
    db.Song.find(req.query)
      .then((song) => {
        res.json(song);
      })
      .catch((err) => res.status(422).json(err));
  },
};