const router = require("express").Router();
const songRoutes = require("./songs")
const userRoutes = require("./user")
// Book routes
router.use('/user', userRoutes )
router.use('/songs', songRoutes )


module.exports = router;
