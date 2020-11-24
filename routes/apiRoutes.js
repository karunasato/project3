const router = require("express").Router();
const db = require("../models");

router.get("/songs", (req, res) => {
  // Use a regular expression to search titles for req.query.q
  // using case insensitive match. https://docs.mongodb.com/manual/reference/operator/query/regex/index.html
  db.Song.find({
    title: { $regex: new RegExp(req.query.q, 'i')}
  })
    .then(songs => res.json(songs))
    .catch(err => res.status(422).end());
});

module.exports = router;
