const Express = require('express')
const router = Express.Router()
const { Nurse, Job } = require('../db/models')
const asyncHandler = require('express-async-handler')

module.exports = router

router.get('/', asyncHandler(async (req, res) => {
  const nurses = await Nurse.scope('jobs').findAll()
  res.send(nurses)
}))

router.put('/:id/jobs', asyncHandler(async (req, res) => {
  const nurse = await Nurse.scope('jobs').findByPk(req.params.id)
  const updated = await nurse.createMatches()
  res.send(updated)
}))