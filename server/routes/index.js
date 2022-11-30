const express = require('express')
const router = express.Router({mergeParams: true})

router.use('/select-master', require('./master.routes'))
router.use('/auth', require('./auth.routes'))

module.exports = router
