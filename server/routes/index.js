const Express = require('express')
const router = Express.Router()

module.exports = router

router.get('/poop', (req, res, next) => {
  res.send(['this', 'that', 'and this'])
})

router.use('/jobs', require('./jobs'))
router.use('/nurses', require('./nurses'))