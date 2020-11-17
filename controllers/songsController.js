const db = require("../../models");

// Defining methods for the songsController
module.exports = {
  findById: function(req, res) {
    db.Song
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};
