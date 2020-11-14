const mongoose = require("mongoose");
const { Song } = require(".");
const Schema = mongoose.Schema;

const songSchema = new Schema({
  title: { type: String, required: true },
  href: {
    type: String,
    default: "",
    unique: true
  },
});

const Song = mongoose.model("Song", songSchema);

module.exports = Song;
