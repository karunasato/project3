const router = require("express").Router();
const { any } = require("prop-types");
const userController = require("../../controllers/userController");
const passport = require("../../passport");

router.post("/signup", userController.register);
router.post("/login", passport.authenticate("local"), userController.authenticate);
router.post("/logout", userController.logout);
router.get("/currentuser", userController.auth);

module.exports = router;