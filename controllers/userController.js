const db = require("../models");
// Defining methods for the userController
module.exports = {
  getUser: (req, res, next) => {
    if (req.user) {
      return res.json({ user: req.user });
    } else {
      return res.json({ user: null });
    }
  },
  findById: function (req, res) {
    db.User.findOne({ _id: req.params.id })
      .then((user) => {
        res.json(user);
      })
      .catch((err) => res.status(422).json(err));
  },
  register: (req, res) => {
    console.log(req.body)
    const { username, password, email } = req.body;
    console.log("WORKING! ", username, password, email)
    // ADD VALIDATION
    db.User.findOne({ username: username }, (err, userMatch) => {
      if (userMatch) {
        return res.json({
          error: `Sorry, already a user with the username: ${username}`,
        });
      }
      const newUser = new db.User({
        username: username,
        password: password,
        email: email,
      });
      newUser.save((err, savedUser) => {
        if (err) return res.json(err);
        const { password, ...user } = savedUser._doc;
        return res.json(user);
      });
    });
  },
  logout: (req, res) => {
    if (req.user) {
      req.session.destroy();
      res.clearCookie("connect.sid"); // clean!
      return res.json({ msg: "logging you out" });
    } else {
      return res.json({ msg: "no user to log out!" });
    }
  },
  auth: function (req, res) {
    if (req.user) {
      const user = JSON.parse(JSON.stringify(req.user)); // hack
      const cleanUser = Object.assign({}, user);
      if (cleanUser) {
        delete cleanUser.password;
      }
      res.json(cleanUser);
    }else{
      res.json("no user logged in!")
    }
  },
  authenticate: (req, res) => {
    const user = JSON.parse(JSON.stringify(req.user)); // hack
    const cleanUser = Object.assign({}, user);
    if (cleanUser) {
      delete cleanUser.password;
    }
    res.json(cleanUser);
  },
};