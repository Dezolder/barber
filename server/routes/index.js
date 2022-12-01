const express = require('express')
const router = express.Router({mergeParams: true})

router.use('/select-master', require('./master.routes'))
router.use('/auth', require('./auth.routes'))
router.use("/user", require("./user.routes"));

module.exports = router
