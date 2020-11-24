const mongoose = require("mongoose");
const db = require("../models");
// This file empties the Song list and inserts the songs below
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/tensorflow"
);
const songSeed = [
  {
    title: "Sad Song",
    href: "https://www.youtube.com/embed/zdngjh5cy5E",
  },
  {
    title: "Sad Song",
    href: "https://www.youtube.com/embed/6rvEKMwkOYo",
  },
  {
    title: "Happy Song",
    href: "https://www.youtube.com/embed/vP_Bi4z65Wk",
  },
  {
    title: "Happy Song",
    href: "https://www.youtube.com//embed/2zToEPpFEN8",
  }
];
db.Song
  .remove({})
  .then(() => db.Song.insertMany(songSeed))
  .then(data => {
    console.log(data + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
