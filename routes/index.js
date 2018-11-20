const Express = require('express')
const router = Express.Router()

module.exports = router

router.use('/jobs', require('./jobs'))
