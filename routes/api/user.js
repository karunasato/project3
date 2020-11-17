const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport = require("../../passport");

router.post("/signup", userController.register);
router.post("/login", passport.authenticate("local"), userController.authenticate);
router.get("/logout", userController.logout);
router.get("/currentuser", userController.auth);

module.exports = router;