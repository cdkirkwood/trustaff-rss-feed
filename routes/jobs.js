const Express = require('express')
const router = Express.Router()
const asyncHandler = require('express-async-handler')
const { Job, Nurse } = require('../db/models')
const axios = require('axios')
const parseString = require('xml2js').parseString
const { calcDistance } = require('../helperFuncs')

module.exports = router

router.post('/', asyncHandler(async (req, res, next) => {
  const response = await axios.get('http://rss.trustaff.com')
  parseString(response.data, async (err, result) => {
    if (err) next(err)
    const jobs = result.rss.channel[0].item.reverse().slice(0, 100)
    const queriedJobs = await Promise.all([...jobs].map(job => {
      const { JobRequestID, Zip, SpecialtyName, JobURL } = job
      return Job.findOrCreate({
        where: {
          id: JobRequestID[0]
        },
        defaults: {
          id: JobRequestID[0],
          zip: Zip[0].slice(0, 5),
          specialty: SpecialtyName[0],
          link: JobURL[0]
        }
      })
    }))
    const createdJobs = queriedJobs.filter(job => job[1])
    const something = createdJobs.reduce(async (promise, newJob) => {
      return promise.then(() => Nurse.findAll({
        where:
          { specialty: newJob[0].specialty }
      }))
        .then(nurses => {
          nurses.forEach(async nurse => {
            console.log(nurse.name)
            if (calcDistance(nurse, newJob[0])) await nurse.addJob(newJob[0])
          })
          return nurses
        })
    }, Promise.resolve([]))
    res.send(something)
  })
}))
