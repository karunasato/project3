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
    href: "https://www.youtube.com/embed/zdngjh5cy5E?autoplay=1",
  },
  {
    title: "Sad Song",
    href: "https://www.youtube.com/embed/6rvEKMwkOYo?autoplay=1",
  },
  {
    title: "Sad Song",
    href: "https://www.youtube.com/embed/y3c4H1CUPT4?autoplay=1",
  },
  {
    title: "Sad Song",
    href: "https://www.youtube.com/embed/mRV8s7YJpCQ?autoplay=1",
  },
  {
    title: "Sad Song",
    href: "https://www.youtube.com/embed/E1s5TGJo8Rw?autoplay=1",
  },
  {
    title: "Sad Song",
    href: "https://www.youtube.com/embed/Bsi5uvBtd3Q?autoplay=1",
  },
  {
    title: "Sad Song",
    href: "https://www.youtube.com/embed/K7z3590-Mt0?autoplay=1",
  },
  {
    title: "Sad Song",
    href: "https://www.youtube.com/embed/V1Pl8CzNzCw?autoplay=1",
  },
  {
    title: "Sad Song",
    href: "https://www.youtube.com/embed/hn3wJ1_1Zsg?autoplay=1",
  },
  {
    title: "Sad Song",
    href: "https://www.youtube.com/embed/ndCI8DIM86w?autoplay=1",
  },
  {
    title: "Happy Song",
    href: "https://www.youtube.com/embed/vP_Bi4z65Wk?autoplay=1",
  },
  {
    title: "Happy Song",
    href: "https://www.youtube.com/embed/E07s5ZYygMg?autoplay=1",
  },
  {
    title: "Happy Song",
    href: "https://www.youtube.com/embed/gdZLi9oWNZg?autoplay=1",
  },
  {
    title: "Happy Song",
    href: "https://www.youtube.com/embed/QYh6mYIJG2Y?autoplay=1",
  },
  {
    title: "Happy Song",
    href: "https://www.youtube.com/embed/2zToEPpFEN8?autoplay=1",
  },
  {
    title: "Happy Song",
    href: "https://www.youtube.com/embed/Amsbv8GlEBk?autoplay=1",
  },
  {
    title: "Happy Song",
    href: "https://www.youtube.com/embed/16YnOUnbE6s?autoplay=1",
  },
  {
    title: "Happy Song",
    href: "https://www.youtube.com/embed/q0hyYWKXF0Q?autoplay=1",
  },
  {
    title: "Happy Song",
    href: "https://www.youtube.com/embed/oygrmJFKYZY?autoplay=1",
  },
  {
    title: "Happy Song",
    href: "https://www.youtube.com//embed/GrAchTdepsU?autoplay=1",
  },
  {
    title: "Love Song",
    href: "https://www.youtube.com//embed/1jO2wSpAoxA?autoplay=1",
  },
  {
    title: "Love Song",
    href: "https://www.youtube.com//embed/0RyInjfgNc4?autoplay=1",
  },
  {
    title: "Love Song",
    href: "https://www.youtube.com//embed/zABLecsR5UE?autoplay=1",
  },
  {
    title: "Love Song",
    href: "https://www.youtube.com//embed/bo_efYhYU2A?autoplay=1",
  },
  {
    title: "Love Song",
    href: "https://www.youtube.com//embed/PQZhN65vq9E?autoplay=1",
  },
  {
    title: "Love Song",
    href: "https://www.youtube.com//embed/450p7goxZqg?autoplay=1",
  },
  {
    title: "Love Song",
    href: "https://www.youtube.com//embed/aNzCDt2eidg?autoplay=1",
  },
  {
    title: "Love Song",
    href: "https://www.youtube.com//embed/0yW7w8F2TVA?autoplay=1",
  },
  {
    title: "Love Song",
    href: "https://www.youtube.com//embed/o_1aF54DO60?autoplay=1",
  },
  {
    title: "Love Song",
    href: "https://www.youtube.com//embed/KhjTa_7Nq6Y?autoplay=1",
  },
  {
    title: "Party Song",
    href: "https://www.youtube.com//embed/wnJ6LuUFpMo?autoplay=1",
  },
  {
    title: "Party Song",
    href: "https://www.youtube.com//embed/j2pPJywRGTk?autoplay=1",
  },
  {
    title: "Party Song",
    href: "https://www.youtube.com//embed/NUsoVlDFqZg?autoplay=1",
  },
  {
    title: "Party Song",
    href: "https://www.youtube.com//embed/hT_nvWreIhg?autoplay=1",
  },
  {
    title: "Party Song",
    href: "https://www.youtube.com//embed/kJQP7kiw5Fk?autoplay=1",
  },
  {
    title: "Party Song",
    href: "https://www.youtube.com//embed/WE08mJ5YUuk?autoplay=1",
  },
  {
    title: "Party Song",
    href: "https://www.youtube.com//embed/Q-T7Mp-OPWw?autoplay=1",
  },
  {
    title: "Party Song",
    href: "https://www.youtube.com//embed/iLBBRuVDOo4?autoplay=1",
  },
  {
    title: "Party Song",
    href: "https://www.youtube.com//embed/e7HBypw4lhY?autoplay=1",
  },
  {
    title: "Party Song",
    href: "https://www.youtube.com//embed/8Ewdv4l7X7g?autoplay=1",
  },
  {
    title: "Rest Song",
    href: "https://www.youtube.com//embed/9Li9-Qu6cdg?autoplay=1",
  },
  {
    title: "Rest Song",
    href: "https://www.youtube.com//embed/glUpnjsiGQ4?autoplay=1",
  },
  {
    title: "Rest Song",
    href: "https://www.youtube.com//embed/AGVN4dMF5Go?autoplay=1",
  },
  {
    title: "Rest Song",
    href: "https://www.youtube.com//embed/uCQ6iGtZ72s?autoplay=1",
  },
  {
    title: "Rest Song",
    href: "https://www.youtube.com//embed/ADp1xYi0a94?autoplay=1",
  },
  {
    title: "Rest Song",
    href: "https://www.youtube.com//embed/4Tr0otuiQuU?autoplay=1",
  },
  {
    title: "Rest Song",
    href: "https://www.youtube.com//embed/7j2fskjfDhE?autoplay=1",
  },
  {
    title: "Rest Song",
    href: "https://www.youtube.com//embed/912Tj-05wp0?autoplay=1",
  },
  {
    title: "Rest Song",
    href: "https://www.youtube.com//embed/RFv5Tit6yW4?autoplay=1",
  },
  {
    title: "Rest Song",
    href: "https://www.youtube.com//embed/8Aab8wRrCQQ?autoplay=1",
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
