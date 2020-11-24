const db = require("../models");
// Defining methods for the userController
module.exports = {
  getSong: (req, res) => {
    console.log('inside the controller')
    console.log(req.query)
    db.Song.find(req.query)
      .then((song) => {
        res.json(song);
      })
      .catch((err) => res.status(422).json(err));
  },
};