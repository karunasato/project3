const router = require("express").Router();
const songRoutes = require("./songs");
const userRoutes = require("./user")
// Book routes
router.use("/songs", songRoutes);
router.use('/user', userRoutes )

module.exports = router;
