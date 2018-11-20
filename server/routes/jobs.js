const Express = require('express')
const router = Express.Router()
const asyncHandler = require('express-async-handler')
const { Job, Nurse } = require('../db/models')
const axios = require('axios')
const parseString = require('xml2js').parseString

module.exports = router

router.post('/', asyncHandler(async (req, res, next) => {
  const response = await axios.get('http://rss.trustaff.com')
  parseString(response.data, async (err, result) => {
    if (err) next(err)
    const jobs = result.rss.channel[0].item.reverse().slice(0, 1000)
    const queriedJobs = await Promise.all([...jobs].map(job => {
      const { JobRequestID, Zip, SpecialtyName, JobURL } = job
      return Job.findOrCreate({
        where: {
          id: JobRequestID[0]
        },
        include: [{
          model: Nurse
        }],
        defaults: {
          id: JobRequestID[0],
          zip: Zip[0].slice(0, 5),
          specialty: SpecialtyName[0],
          link: JobURL[0]
        }
      })
    }))
    const createdJobs = queriedJobs.filter(job => job[1])
    await Promise.all(createdJobs.map(job => {
      return job[0].createMatches()
    }))
    const updatedJobs = await Promise.all(createdJobs.map(job => {
      return Job.findByPk(job[0].id, { include: [{all: true }] })
    }))
    res.send(updatedJobs)
  })
}))
