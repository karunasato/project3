const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const passport = require("passport");
const session = require("express-session")
const routes = require("./routes");


//initializes mongoose connection;
require("./db");

app.use(express.urlencoded({extended:true}));
app.use(express.json());
//passport setup with session (this is optional but simple way to set up reauth, also can look into JWT);
app.use(session({ secret: 'keyboard cat' }));
app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
