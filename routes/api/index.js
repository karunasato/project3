const router = require("express").Router();
const userRoutes = require("./user")
const songRoutes = require("./songs")

// Book routes
router.use('/user', userRoutes )
router.use('/songs', songRoutes )


module.exports = router;
